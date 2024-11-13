export const truncateText: (text: string, limit: number) => string = (text, limit) => {
  return text.length > limit ? `${text.slice(0, limit)}...` : text;
};