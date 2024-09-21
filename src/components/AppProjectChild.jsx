const AppProjectChild = (props) => {

    const {data} = props;

    return (
        <div>
            <a href="https://github.com/bqsst/person-type" target="_blank">
                <div className="flex flex-col text-white py-4 sm:h-[250px] rounded-lg border border-gray-300 hover:bg-gray-100">
                    <div className="h-2/3">
                        <img src={data.picUrl} alt="" className="object-contain w-full h-full" />
                    </div>
                    <div className="flex flex-col h-1/3 pt-2 pl-4">
                        <h1 className="text-black text-base sm:text-xl lg:text-base object-cover">{data.name}</h1>
                        <p className="text-black text-sm sm:text-base lg:text-sm text-opacity-50 object-cover">{data.describe}</p>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default AppProjectChild;