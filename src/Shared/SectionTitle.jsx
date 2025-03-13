import '../../src/index.css';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <p className="tealGreen italic mb-2">--- {subHeading} ---</p>
            <h3 className="text-2xl text-gray-900 dark:text-gray-600 italic uppercase border-y-3 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;
