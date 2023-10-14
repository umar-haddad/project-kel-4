export const renderDate = (dateData) => {
  const date = new Date(dateData);
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Asia/Jakarta',
  };
  const formattedDate = date.toLocaleDateString('id-ID', options);
  return formattedDate;
};

export const createSpinner = () => {
  return `
         <div class="d-flex justify-content-center  mt-5">
          <div class="spinner-border" role="status">
               <span class="visually-hidden">Loading...</span>
          </div>
         </div>
      `;
};
