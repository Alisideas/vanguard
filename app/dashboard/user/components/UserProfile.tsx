"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/app/components/ui/button";
import axios from "axios";

interface UserProfileProps {
  user: {
    id: string;
    name: string;
    email: string;
    profilePicture?: string;
    profileBanner?: string;
    gamesPlayed: number;
    mafiaCount: number;
    citizenCount: number;
    starRating: number; // 0-5
  };
  isOwner: boolean; // if the logged-in user is viewing their own profile
}

const UserProfile: React.FC<UserProfileProps> = ({ user, isOwner }) => {
  const [profilePicture, setProfilePicture] = useState(user.profilePicture);
  const [profileBanner, setProfileBanner] = useState(user.profileBanner);

  const handleUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "profilePicture" | "profileBanner"
  ) => {
    if (!e.target.files?.[0]) return;
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append("file", file);
    formData.append("type", type);

    try {
      const { data } = await axios.post("/api/user/upload", formData);
      if (type === "profilePicture") setProfilePicture(data.url);
      else setProfileBanner(data.url);
    } catch (err) {
      console.error("Upload failed", err);
    }
  };

  const handleDelete = async (type: "profilePicture" | "profileBanner") => {
    try {
      await axios.delete(`/api/user/delete?type=${type}`);
      if (type === "profilePicture") setProfilePicture(undefined);
      else setProfileBanner(undefined);
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  return (
    <div className="max-w-4xl mt-12 mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
      {/* Banner */}
      <div className="relative h-48 w-full bg-gray-200">
        {profileBanner && (
          <Image
            src={profileBanner}
            alt="Profile Banner"
            fill
            className="object-cover"
          />
        )}
        {isOwner && (
          <div className="absolute top-2 right-2 flex gap-2">
            <input
              type="file"
              id="banner-upload"
              className="hidden"
              onChange={(e) => handleUpload(e, "profileBanner")}
            />
            <label htmlFor="banner-upload">
              <Button size="sm">Upload Banner</Button>
            </label>
            {profileBanner && (
              <Button
                size="sm"
                variant="destructive"
                onClick={() => handleDelete("profileBanner")}
              >
                Delete
              </Button>
            )}
          </div>
        )}
      </div>

      {/* Profile info */}
      <div className="flex flex-col items-center -mt-16 pb-6">
        <div className="relative w-32 h-32 rounded-full border-4 border-white overflow-hidden bg-gray-300">
          {profilePicture && (
            <Image
              src={profilePicture}
              alt="Profile Picture"
              fill
              className="object-cover"
            />
          )}
          {isOwner && (
            <div className="absolute bottom-0 right-0 flex gap-1">
              <input
                type="file"
                id="profile-upload"
                className="hidden"
                onChange={(e) => handleUpload(e, "profilePicture")}
              />
              <label htmlFor="profile-upload">
                <Button size="sm">Upload</Button>
              </label>
              {profilePicture && (
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => handleDelete("profilePicture")}
                >
                  Delete
                </Button>
              )}
            </div>
          )}
        </div>

        <h2 className="mt-4 text-2xl font-semibold">{user.name}</h2>
        <p className="text-gray-500">{user.email}</p>

        {/* Stats */}
        <div className="mt-4 flex flex-col sm:flex-row sm:gap-8 items-center text-center">
          <div>
            <p className="font-bold text-lg">{user.gamesPlayed}</p>
            <p className="text-gray-500">Games Played</p>
          </div>
          <div>
            <p className="font-bold text-lg">{user.mafiaCount}</p>
            <p className="text-gray-500">Times Mafia</p>
          </div>
          <div>
            <p className="font-bold text-lg">{user.citizenCount}</p>
            <p className="text-gray-500">Times Citizen</p>
          </div>
          <div className="flex items-center justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={i < user.starRating ? "text-yellow-400" : "text-gray-300"}
              >
                ★
              </span>
            ))}
            <p className="text-gray-500 ml-2">Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
