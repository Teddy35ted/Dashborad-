 'use client';

import Image, { StaticImageData } from 'next/image';
import { useState, useRef } from 'react';
import Photo from './public/profile.jpg';

const Profile = () => {
  const [profileImage, setProfileImage] = useState<StaticImageData | string>(Photo);
  const [isEditing, setIsEditing] = useState({
    personal: false,
    address: false
  });
  const [personalInfo, setPersonalInfo] = useState({
    firstName: 'Rafiqur',
    lastName: 'Rahman',
    email: 'rafiqurrahman51@gmail.com',
    phone: '+09 365 346 46',
    bio: 'Team Manager'
  });
  const [addressInfo, setAddressInfo] = useState({
    country: 'United Kingdom',
    city: 'Leeds, East London',
    postalCode: 'ERT 2354',
    taxId: 'AS45645756'
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const handlePersonalEdit = () => {
    setIsEditing(prev => ({ ...prev, personal: !prev.personal }));
  };

  const handleAddressEdit = () => {
    setIsEditing(prev => ({ ...prev, address: !prev.address }));
  };

  const handlePersonalInfoChange = (field: keyof typeof personalInfo, value: string) => {
    setPersonalInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleAddressInfoChange = (field: keyof typeof addressInfo, value: string) => {
    setAddressInfo(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="flex-1 p-8 bg-white">
      <h1 className="text-2xl text-gray-700 font-normal mb-8">My Profile</h1>
      
      <div className="flex items-center mb-8">
        <div className="relative w-16 h-16 cursor-pointer" onClick={handleImageClick}>
          <Image
            src={profileImage}
            alt="Profile"
            width={64}
            height={64}
            className="rounded-full"
          />
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept="image/*"
            onChange={handleImageChange}
            title="Upload profile image"
          />
        </div>
        <div className="ml-4">
          <h2 className="font-normal text-gray-900">Rafiqur Rahman</h2>
          <p className="text-gray-500">Team Manager</p>
          <p className="text-gray-500 text-sm">Leeds, United Kingdom</p>
        </div>
      </div>

      {/* Personal Information */}
      <div className="mb-8 bg-white rounded-lg border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-normal text-gray-900">Personal Information</h3>
          <button 
            onClick={handlePersonalEdit}
            className="text-gray-500 hover:text-gray-800 border border-gray-200 rounded-md px-3 py-1"
          >
            {isEditing.personal ? 'Save' : 'Edit'}
          </button>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {Object.entries(personalInfo).map(([key, value]) => (
            <div key={key}>
              <p className="text-sm text-gray-600">{key.charAt(0).toUpperCase() + key.slice(1)}</p>
              {isEditing.personal ? (
                <input
                  type="text"
                  value={value}
                  onChange={(e) => handlePersonalInfoChange(key as keyof typeof personalInfo, e.target.value)}
                  className="mt-1 p-1 w-full border rounded"
                  placeholder={`Enter ${key.charAt(0).toUpperCase() + key.slice(1)}`}
                />
              ) : (
                <p className="mt-1 text-gray-500">{value}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Address */}
      <div className="bg-white rounded-lg border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-normal text-gray-600">Address</h3>
          <button 
            onClick={handleAddressEdit}
            className="text-gray-500 hover:text-gray-800 border border-gray-200 rounded-md px-3 py-1"
          >
            {isEditing.address ? 'Save' : 'Edit'}
          </button>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {Object.entries(addressInfo).map(([key, value]) => (
            <div key={key}>
              <p className="text-sm text-gray-600">{key.charAt(0).toUpperCase() + key.slice(1)}</p>
              {isEditing.address ? (
                <input
                  type="text"
                  value={value}
                  onChange={(e) => handleAddressInfoChange(key as keyof typeof addressInfo, e.target.value)}
                  className="mt-1 p-1 w-full border rounded"
                  placeholder={`Enter ${key.charAt(0).toUpperCase() + key.slice(1)}`}
                  title={`Enter ${key.charAt(0).toUpperCase() + key.slice(1)}`}
                />
              ) : (
                <p className="mt-1 text-gray-500">{value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;