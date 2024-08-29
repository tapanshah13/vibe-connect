
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}


export function getTimeAgo(createdAtStr) {
  const createdAt = new Date(createdAtStr);
  const currentTime = new Date();
  const timeDifference = currentTime - createdAt;

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days} days ago`;
  } else if (hours > 0) {
    return `${hours} hours ago`;
  } else if (minutes > 0) {
    return `${minutes} minutes ago`;
  } else {
    return `${seconds} seconds ago`;
  }
}

export function convertDateStringToJoinedString(dateString) {

  console.log(dateString)
  // Extract year and month from the date string
  const year = parseInt(dateString.substring(0, 4));
  const monthIndex = parseInt(dateString.substring(5, 7)) - 1; // Month index starts from 0

  // Deduct three years from the obtained year
  const adjustedYear = year - 3;

  // Define an array to map month indices to month names
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Format the result as "Joined Month Year"
  return `Joined ${monthNames[monthIndex]} ${adjustedYear}`;
}