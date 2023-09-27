const Contact = () => {
    return (
        <div className="contact w-6/12 bg-lime-50 p-4 m-2 h-[250px]">
            <h1 className="px-2 m-2 text-xl font-bold">Contact Us</h1>
            <form className="flex flex-col w-6/12">
                <input type="text" className="border border-black my-2" placeholder="Enter your name" />
                <input type="text" className="border border-black my-2" placeholder="Enter the query" />
                <button className="border border-black px-2 my-2 mx-auto rounded-2xl bg-lime-500 w-5/12">Submit</button>
            </form>
        </div>
    )
}

export default Contact