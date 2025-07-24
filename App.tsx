import React, { useState, useEffect } from 'react';
import HomeView from './components/views/HomeView';
import EditorView from './components/views/EditorView';
import { ThemeProvider } from './contexts/ThemeContext';

const App: React.FC = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [selectedLayerId, setSelectedLayerId] = useState<string | null>(null);

  const handleImageSelect = (file: File) => {
    setImageFile(file);
    setSelectedLayerId(null);
  };

  const handleReset = () => {
    setImageFile(null);
    setSelectedLayerId(null);
  };

  return (
    <ThemeProvider>
      <div className="font-sans antialiased text-gray-800 dark:text-gray-200 min-h-screen transition-colors duration-300">
        {imageFile ? (
          <EditorView 
            imageFile={imageFile} 
            onReset={handleReset} 
            selectedLayerId={selectedLayerId}
            setSelectedLayerId={setSelectedLayerId}
          />
        ) : (
          <HomeView onImageSelect={handleImageSelect} />
        )}
      </div>
    </ThemeProvider>
  );
};

export default App;