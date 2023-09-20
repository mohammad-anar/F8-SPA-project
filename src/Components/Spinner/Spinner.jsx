
import { Dna } from 'react-loader-spinner'
const Spinner = () => {
    return (
        <div className='flex items-center justify-center h-full'>
            <Dna
                visible={true}
                height="200"
                width="200"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />
        </div>
    );
};

export default Spinner;