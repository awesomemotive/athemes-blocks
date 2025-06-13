const icons = {
    'docs': <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 8.4C3 5.3832 3 3.8744 3.9376 2.9376C4.8744 2 6.3832 2 9.4 2H11C14.0168 2 15.5256 2 16.4624 2.9376C17.4 3.8744 17.4 5.3832 17.4 8.4V11.6C17.4 14.6168 17.4 16.1256 16.4624 17.0624C15.5256 18 14.0168 18 11 18H9.4C6.3832 18 4.8744 18 3.9376 17.0624C3 16.1256 3 14.6168 3 11.6V8.4Z" stroke="#5C5F62" strokeWidth="1.5"/>
        <path d="M7 8.39929H13.4M7 11.5993H11" stroke="#5C5F62" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
};

const CustomIcon = (props) => {
    const { icon } = props;

    return icons[ icon ];
};

export { CustomIcon };