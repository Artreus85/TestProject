import React from "react";

interface CustomComponentProps {
  content: React.ReactNode; 
}


const MainContent: React.FC<CustomComponentProps> = ({ content }) => {
  return (
    <main className="flex flex-col items-center justify-center flex-grow bg-gray-100 py-20">
      {content}
    </main>
  );
};

export default MainContent;