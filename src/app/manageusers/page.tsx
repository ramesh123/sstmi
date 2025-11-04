"use client";
import { useEffect, useState } from "react";
import MainHeader from '@/components/TopInfo';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Tiles from '@/components/Tiles';
import FloatingDonateButton from '@/components/FloatingDonateButton';
import { makeSignedRequest } from '../app/../layout-client';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface User {
  RoleId: number;
  UserId: string;
  IsActive: boolean;
  CreatedAt: string;
  Email: string;
  Name: string;
}

interface SortConfig {
  key: keyof User | null;
  direction: 'asc' | 'desc';
}

const Toast = ({ message, type, onClose }: { message: string; type: 'success' | 'error'; onClose: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);
  return (
    <div
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '1rem 1.5rem',
        borderRadius: '8px',
        backgroundColor: type === 'success' ? '#10b981' : '#ef4444',
        color: 'white',
        fontWeight: '500',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        zIndex: 9999,
        animation: 'slideIn 0.3s ease-out',
        minWidth: '300px'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span>{message}</span>
        <button
          onClick={onClose}
          style={{
            marginLeft: '1rem',
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '1.5rem',
            cursor: 'pointer',
            padding: '0',
            lineHeight: '1'
          }}
        >
          ×
        </button>
      </div>
      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};


const DataTable: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [listUsers, setListUsers] = useState([]);
  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: null, direction: 'asc' });
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 10;
  const [updatingId, setUpdatingId] = useState<string | null>(null);
const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const getRoleName = (roleId: number): string => {
    const roles: { [key: number]: string } = {
      1: 'Super Admin',
      2: 'Receptionist Admin',
      3: 'Volunteer',
      4: 'Guest'
    };
    return roles[roleId] || 'Unknown';
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Sorting logic
  const sortData = (data: User[]): User[] => {
    if (!sortConfig.key) return data;

    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key!];
      const bValue = b[sortConfig.key!];

      if (aValue < bValue) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  };

  // Filter data based on search
  const filterData = (data: User[]): User[] => {
    if (!searchTerm) return data;
    
    return data.filter(item =>
      Object.values(item).some(val =>
        String(val).toLowerCase().includes(searchTerm.toLowerCase())
      ) || getRoleName(item.RoleId).toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  // Handle sort
  const handleSort = (key: keyof User): void => {
    setSortConfig({
      key,
      direction: sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc'
    });
  };

  // Process data
  const filteredData: User[] = filterData(listUsers);
  const sortedData: User[] = sortData(filteredData);
  
  // Pagination
  const totalPages: number = Math.ceil(sortedData.length / itemsPerPage);
  const startIndex: number = (currentPage - 1) * itemsPerPage;
  const paginatedData: User[] = sortedData.slice(startIndex, startIndex + itemsPerPage);

  const getSortIcon = (key: keyof User) => {
    if (sortConfig.key !== key) {
      return <span className="text-gray-400">⇅</span>;
    }
    return sortConfig.direction === 'asc' ? <span>↑</span> : <span>↓</span>;
  };

  const getUsersList = async () => {
    setIsLoading(true);
    try {
      if (typeof window.grecaptcha === 'undefined') {
        throw new Error('reCAPTCHA has not loaded');
      }

      const token = await new Promise<string>((resolve, reject) => {
        window.grecaptcha.ready(() => {
          window.grecaptcha.execute('6Lfgd58qAAAAAPV03W3LgVMhxu57mDL006Jr3Jhs', { action: 'submit' })
            .then(resolve, reject);
        });
      });

      const response = await fetch("https://nfgfx2bpj6.execute-api.us-east-1.amazonaws.com/ProdUser/listusers", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await response.json();
      let msg = JSON.parse(data?.body);
      setListUsers(msg?.users || []);
      setIsLoading(false);
    } catch (error) {
      setToast({ message: "An error occurred. Please try again later.", type: 'error' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleStatus = async (item: User) => {
    const newStatus = !item.IsActive;
    const userid = item.UserId;
    const optimisticUser = { ...item, IsActive: newStatus };
    //setListUsers(prev => prev.map(u => (u.UserId === item.UserId ? optimisticUser : u)));
   // setUpdatingId(item.UserId);
    try {
      const jsonObj = { body: JSON.stringify({ UserId: userid, IsActive: newStatus }) };
      const response = await fetch("https://nfgfx2bpj6.execute-api.us-east-1.amazonaws.com/ProdUser/UpdateUserStatus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(jsonObj)
      });
      const data = await response.json();
      let msg = JSON.parse(data?.body);
      if (msg?.message) {
        setToast({ message: msg?.message || 'Updated Successfully', type: 'success' });
        getUsersList();
      } else {
        setToast({ message: msg?.message || 'Something went wrong', type: 'error' });
      }
    } catch (error) {
      setToast({ message: "An error occurred. Please try again later.", type: 'error' });
    } finally {
     // setIsLoading(false);
    }
  };

  useEffect(() => {
    getUsersList();
  }, []);

  return (
    <>
      <MainHeader />
      <Navbar />
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
            <h2 className="text-2xl font-bold text-gray-800">Manage Users</h2>
          </div>

          {/* Search Bar */}
          <div className="px-6 py-4 bg-gray-50">
            <input
              type="text"
              placeholder="Search across all columns..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    <button
                      onClick={() => handleSort('Name')}
                      className="flex items-center gap-2 hover:text-blue-600 transition"
                    >
                      Name {getSortIcon('Name')}
                    </button>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    <button
                      onClick={() => handleSort('Email')}
                      className="flex items-center gap-2 hover:text-blue-600 transition"
                    >
                      Email {getSortIcon('Email')}
                    </button>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    <button
                      onClick={() => handleSort('RoleId')}
                      className="flex items-center gap-2 hover:text-blue-600 transition"
                    >
                      Role {getSortIcon('RoleId')}
                    </button>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    <button
                      onClick={() => handleSort('IsActive')}
                      className="flex items-center gap-2 hover:text-blue-600 transition"
                    >
                      Status {getSortIcon('IsActive')}
                    </button>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    <button
                      onClick={() => handleSort('CreatedAt')}
                      className="flex items-center gap-2 hover:text-blue-600 transition"
                    >
                      Created At {getSortIcon('CreatedAt')}
                    </button>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    <button
                      onClick={() => handleSort('CreatedAt')}
                      className="flex items-center gap-2 hover:text-blue-600 transition"
                    >
                      Action
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {paginatedData.length > 0 ? (
                  paginatedData.map((row: User, index: number) => (
                    <tr key={`${row.UserId}-${index}`} className="hover:bg-blue-50 transition">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {row.Name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {row.Email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {getRoleName(row.RoleId)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          row.IsActive
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {row.IsActive ? 'Active' : 'Inactive'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {formatDate(row.CreatedAt)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={row.IsActive}
                            disabled={updatingId === row.UserId}
                            onChange={() => handleToggleStatus(row)}
                            className="sr-only peer"
                          />
                          <div className={`w-11 h-6 bg-gray-200 rounded-full peer 
                            peer-focus:ring-4 peer-focus:ring-blue-300 
                            dark:peer-focus:ring-blue-800 
                            peer-checked:after:translate-x-full 
                            peer-checked:after:border-white 
                            after:content-[''] after:absolute after:top-0.5 after:left-0.5 
                            after:bg-white after:border-gray-300 after:border after:rounded-full 
                            after:h-5 after:w-5 after:transition-all 
                            ${row.IsActive ? 'bg-blue-600' : 'bg-gray-400'} 
                            ${updatingId === row.UserId ? 'opacity-60' : ''}`}
                          />
                          {updatingId === row.UserId && (
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-blue-600 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                            </svg>
                          )}
                        </label>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                      No results found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
            <div className="text-sm text-gray-600">
              Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, sortedData.length)} of {sortedData.length} results
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                Previous
              </button>
              <div className="flex gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page: number) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition ${
                      currentPage === page
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
      <Footer />

    </>
  );
};

export default DataTable;