import { Button, TextInput } from "@mantine/core";

const Subscribe = () => {
    return (
        <>
            <div className="mt-8 mb-8  flex items-center bg-gray-300 w-[75%] mx-auto rounded-lg justify-around">
                <div className="text-5xl text-gray-400 w-2/5 pt-8 pb-8 text-center font-bold capitalize [&>span]:text-blue-700">never want to miss any <span>job news?</span> </div>
                <div className="flex gap-3 px-2 py-3 bg-gray-50 items-center rounded-lg">
                    <TextInput
                        variant="unstyled"
                        placeholder="email@example.com"
                        size="xl"
                    />
                    <Button color="rgba(105, 99, 255, 0.77)" variant="filled">Subscribe</Button>
                </div>
            </div>

        </>
    )
}

export default Subscribe;