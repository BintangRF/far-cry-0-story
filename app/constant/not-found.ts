export const textNotFound = (lang: string | null) => {
  let text = "";

  switch (lang) {
    case "en":
      text = "Content not Found";
      break;

    default:
      text = "Konten tidak ditemukan";
      break;
  }

  return { text };
};
