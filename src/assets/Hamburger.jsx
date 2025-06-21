export default function HamburgerIcon({ isOpen, toggleMenu }) {
  return (
    <div onClick={toggleMenu} className="cursor-pointer w-9 h-9">
      {isOpen ? (
        <svg viewBox="0 0 24 24" className="w-9 h-9" fill="white">
          <path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ) : (
        <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 26.75C30 27.4404 29.4403 28 28.75 28L5 28C4.30963 28 3.75 27.4404 3.75 26.75C3.75 26.0596 4.30963 25.5 5 25.5L28.75 25.5C29.4403 25.5 30 26.0596 30 26.75Z" fill="white"/>
          <path d="M30 17.9999C30 18.6902 29.4403 19.25 28.75 19.25L15 19.2496C14.3096 19.2496 13.75 18.69 13.75 17.9996C13.75 17.3092 14.3096 16.7496 15 16.7496L28.75 16.7499C29.4403 16.7499 30 17.3096 30 17.9999Z" fill="white"/>
          <path d="M28.75 10.5002C29.4403 10.5002 30 9.94062 30 9.25024C30 8.55999 29.4403 8.00037 28.75 8.00037L7.5 8.00037C6.80963 8.00037 6.25 8.55999 6.25 9.25024C6.25 9.94062 6.80963 10.5002 7.5 10.5002L28.75 10.5002Z" fill="white"/>
        </svg>
      )}
    </div>
  );
}