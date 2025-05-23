'use client';

import Image from 'next/image';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  description: string;
  linkedin?: string;
  twitter?: string;
}

export default function TeamCard({ name, role, image, description, linkedin, twitter }: TeamCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="mt-6 text-center">
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
        <p className="text-md font-medium text-blue-600">{role}</p>
        <p className="mt-2 text-gray-600">{description}</p>
        
        <div className="mt-4 flex justify-center space-x-4">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors hover:text-blue-600"
            >
              <FaLinkedin size={24} />
            </a>
          )}
          {twitter && (
            <a
              href={twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors hover:text-blue-400"
            >
              <FaTwitter size={24} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
} 