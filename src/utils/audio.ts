export const playAudio = async (url: string): Promise<void> => {
  try {
    // Convert Google Drive URL to direct download URL
    const fileId = url.match(/\/d\/(.*?)\/view/)?.[1];
    if (!fileId) {
      console.error('Invalid Google Drive URL');
      return;
    }
    
    const directUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    const audio = new Audio(directUrl);
    await audio.play();
  } catch (error) {
    console.error('Error playing audio:', error);
  }
};