import "../styles/components/_search-bar.scss";

export default function SearchBar(props: { placeholder: string }) {
  return (
    <div className="search-bar">
      <i className="search-bar__icon">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3 7.33333C3 4.9401 4.9401 3 7.33333 3C9.72657 3 11.6667 4.9401 11.6667 7.33333C11.6667 8.49276 11.2113 9.54583 10.4697 10.3235C10.4432 10.3451 10.4175 10.3682 10.3928 10.3929C10.3681 10.4176 10.345 10.4432 10.3234 10.4698C9.54578 11.2113 8.49273 11.6667 7.33333 11.6667C4.9401 11.6667 3 9.72657 3 7.33333ZM11.0487 12.463C10.0051 13.2202 8.72134 13.6667 7.33333 13.6667C3.83553 13.6667 1 10.8311 1 7.33333C1 3.83553 3.83553 1 7.33333 1C10.8311 1 13.6667 3.83553 13.6667 7.33333C13.6667 8.72137 13.2201 10.0051 12.4629 11.0488L14.707 13.2929C15.0976 13.6834 15.0976 14.3166 14.707 14.7071C14.3165 15.0976 13.6834 15.0976 13.2928 14.7071L11.0487 12.463Z"
            fill="#888888"
          />
        </svg>
      </i>

      <input
        className="search-bar__input"
        type="text"
        placeholder={props.placeholder}
      ></input>
    </div>
  );
}
