'use client';

import { useState } from 'react';

export default function SecurityPage() {
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  return (
    <div className="flex-1 p-8 bg-white relative">
      {/* Password Change Modal */}
      {showPasswordModal && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="bg-white rounded-lg p-6 w-96 shadow-lg border border-gray-200">
            <button 
              onClick={() => setShowPasswordModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            
            <h3 className="text-xl font-medium mb-6">Change Password</h3>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Current Password
                </label>
                <input 
                  type="password"
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter current password"
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  New Password
                </label>
                <input 
                  type="password"
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter new password"
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Confirm New Password
                </label>
                <input 
                  type="password"
                  className="w-full p-2 border rounded-md"
                  placeholder="Confirm new password"
                />
              </div>
              
              <div className="flex justify-end gap-3 mt-6">
                <button 
                  type="button"
                  onClick={() => setShowPasswordModal(false)}
                  className="px-4 py-2 text-gray-600 border rounded-md hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Update Password
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <h1 className="text-2xl text-gray-700 font-normal mb-8">Security</h1>

      {/* Password Section */}
      <div className="mb-8 bg-white rounded-lg border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-normal text-gray-900">Password</h3>
          <button 
            onClick={() => setShowPasswordModal(true)}
            className="text-gray-500 hover:text-gray-800 border border-gray-200 rounded-md px-3 py-1"
          >
            Change Password
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-600">Last changed</p>
            <p className="mt-1 text-gray-500">3 months ago</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Password strength</p>
            <div className="w-full h-2 bg-gray-100 rounded-full mt-2">
              <div className="w-3/4 h-full bg-green-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Access Management Section */}
      <div className="bg-white rounded-lg border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-normal text-gray-900">Access Management</h3>
        </div>
        <div className="space-y-6">
          <div className="flex items-center justify-between py-3 border-b">
            <div>
              <h4 className="text-sm font-medium text-gray-900">Two-Factor Authentication</h4>
              <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
            </div>
            <button className="text-blue-600 hover:text-blue-800">Enable</button>
          </div>
          
          <div className="flex items-center justify-between py-3 border-b">
            <div>
              <h4 className="text-sm font-medium text-gray-900">Active Sessions</h4>
              <p className="text-sm text-gray-500">Manage your active sessions across devices</p>
            </div>
            <button className="text-blue-600 hover:text-blue-800">Manage</button>
          </div>

          <div className="flex items-center justify-between py-3">
            <div>
              <h4 className="text-sm font-medium text-gray-900">Login History</h4>
              <p className="text-sm text-gray-500">View your recent login activity</p>
            </div>
            <button className="text-blue-600 hover:text-blue-800">View</button>
          </div>
        </div>
      </div>
    </div>
  );
}


