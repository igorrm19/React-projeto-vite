type pri = {
  text: string;
};

export function One(pris: pri) {
  return (
    <div id="One">
      <div id="OneCentralizar">
        <p id="OnePum">{pris.text}</p>
        <p>
          <u id="OneUum">Try again</u>
        </p>

        <div>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="OneSvgum"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.7625 7L12.875 2.8875C13.1125 2.6625 13.25 2.35 13.25 2C13.25 1.3125 12.6875 0.75 12 0.75C11.65 0.75 11.3375 0.8875 11.1125 1.1125L7 5.2375L2.8875 1.1125C2.6625 0.8875 2.35 0.75 2 0.75C1.3125 0.75 0.75 1.3125 0.75 2C0.75 2.35 0.8875 2.6625 1.1125 2.8875L5.2375 7L1.125 11.1125C0.8875 11.3375 0.75 11.65 0.75 12C0.75 12.6875 1.3125 13.25 2 13.25C2.35 13.25 2.6625 13.1125 2.8875 12.8875L7 8.7625L11.1125 12.875C11.3375 13.1125 11.65 13.25 12 13.25C12.6875 13.25 13.25 12.6875 13.25 12C13.25 11.65 13.1125 11.3375 12.8875 11.1125L8.7625 7Z"
              fill="#677489"
            />
          </svg>

          <svg
            width="113"
            height="113"
            viewBox="0 0 113 113"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="OneSvgdois"
          >
            <rect width="113" height="113" rx="56.5" fill="#C3CBD5" />
          </svg>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="OneSvgtres"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.9875 -0.0124969C4.4625 -0.0124969 -0.0124969 4.4625 -0.0124969 9.9875C-0.0124969 15.5125 4.4625 19.9875 9.9875 19.9875C15.5125 19.9875 19.9875 15.5125 19.9875 9.9875C19.9875 4.4625 15.5125 -0.0124969 9.9875 -0.0124969ZM11.2375 16.2375H8.7375V13.7375H11.2375V16.2375ZM11.2375 12.4875H8.7375V3.7375H11.2375V12.4875Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}