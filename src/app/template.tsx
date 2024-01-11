"use client";

interface TemplateProps {
    children: React.ReactNode;
}

const Template: React.FC<TemplateProps> = ({ children }) => {

    return (
        <div>
            {children}
            {/* <Script src="/assets/js/owl.carousel.min.js" /> */}
        </div>
    );
};
export default Template;
