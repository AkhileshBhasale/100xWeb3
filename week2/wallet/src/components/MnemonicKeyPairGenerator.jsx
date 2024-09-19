import React, { useState } from 'react';

const MnemonicKeyPairGenerator = () => {
  const [mnemonics, setMnemonics] = useState(Array(12).fill(''));
  const [keyPair, setKeyPair] = useState(null);

  const handleMnemonicChange = (index, value) => {
    const newMnemonics = [...mnemonics];
    newMnemonics[index] = value;
    setMnemonics(newMnemonics);
  };

  const generateKeyPair = () => {
    // This is a placeholder function. In a real application, you would
    // implement actual key pair generation logic here.
    const mockKeyPair = {
      publicKey: 'mock_public_key_' + Math.random().toString(36).substring(7),
      privateKey: 'mock_private_key_' + Math.random().toString(36).substring(7),
    };
    setKeyPair(mockKeyPair);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-4">Mnemonic Key Pair Generator</h2>
      <div className="grid grid-cols-3 gap-4 mb-4">
        {mnemonics.map((word, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Word ${index + 1}`}
            value={word}
            onChange={(e) => handleMnemonicChange(index, e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />
        ))}
      </div>
      <button
        onClick={generateKeyPair}
        className="black-full bg-slate-900 text-white py-2 rounded-md hover:bg-slate-700 transition-colors"
      >
        Generate Key Pair
      </button>
      {keyPair && (
        <div className="mt-4">
          <p><strong>Public Key:</strong> {keyPair.publicKey}</p>
          <p><strong>Private Key:</strong> {keyPair.privateKey}</p>
        </div>
      )}
    </div>
  );
};

export default MnemonicKeyPairGenerator;