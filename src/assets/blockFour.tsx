type pri = {
  text: string;
};

export function Four(pris: pri) {
  return (
    <div id="Four">
      <div id="FourDivdois">
      <p id="FourPdois">{pris.text}</p>
      <p id="FourPum">Drop the image here or click to browse.</p>
      </div>

      <svg
        width="113"
        height="113"
        viewBox="0 0 113 113"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="FourSvgdois"
      >
        <rect width="113" height="113" rx="56.5" fill="#C3CBD5" />
      </svg>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="FourSvgtres"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.9875 -0.0124969C4.4625 -0.0124969 -0.0124969 4.4625 -0.0124969 9.9875C-0.0124969 15.5125 4.4625 19.9875 9.9875 19.9875C15.5125 19.9875 19.9875 15.5125 19.9875 9.9875C19.9875 4.4625 15.5125 -0.0124969 9.9875 -0.0124969ZM11.2375 16.2375H8.7375V13.7375H11.2375V16.2375ZM11.2375 12.4875H8.7375V3.7375H11.2375V12.4875Z"
          fill="white"
        />
      </svg>
    </div>
  );
}
