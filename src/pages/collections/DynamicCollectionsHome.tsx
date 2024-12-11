// import { useParams } from "react-router"

import {Collapse, CollapseProps, Drawer, Select} from "antd";
import {useState} from "react";
import "./collection.css";

const items: CollapseProps["items"] = [
    {
        key: "1",
        label: <p className="text-black">SORT</p>,
        children: (
            <div className="w-full h-max">
                <Select
                className="w-full h-12"
                placeholder={'Select'}
                    options={[
                        {value: "1", label: "Relevance"},
                        {value: "2", label: "The most recent"},
                        {value: "3", label: "Price (-)"},
                        {value: "4", label: "Price (+)"},
                    ]}
                />
            </div>
        ),
    },
    {
        key: "2",
        label: "About ElvisScott",
        children: (
            <div className="">
                Our mission is to give sneaker and streetwear fans, enthusiasts
                and the curious the chance to buy their favourite products with
                complete confidence. Whether you're looking for a limited
                edition product, the hottest pair at the moment or the perfect
                piece of streetwear, you've come to the right place.
            </div>
        ),
    },
    {
        key: "3",
        label: "More information",
        children: (
            <div className="w-full h-max flex flex-col gap-4 ">
                <p>Our concepts</p>
                <p>Conditions of our offer</p>
                <p>ElvisScott Galleries</p>
            </div>
        ),
    },
    {
        key: "4",
        label: "Our services",
        children: (
            <div className="w-full h-max flex flex-col gap-4 ">
                <p>E-gift card</p>
                <p>FAQ</p>
                <p>Programme ElvisScott family</p>
                <p>Sell your product</p>
                <p>Shipping and delivery</p>
                <p>Exchange and returns</p>
                <p>ElvisScott application</p>
                <p>Our promotional codes</p>
            </div>
        ),
    },
    {
        key: "5",
        label: "Collections",
        children: (
            <div className="w-full h-max flex flex-col gap-4 ">
                <p>Women's Sneakers</p>
                <p>Men's Sneakers</p>
                <p>Eco-responsible sneakers</p>
                <p>Less than 200$</p>
            </div>
        ),
    },
];

const DynamicCollectionsHome = () => {
    // const {slug} = useParams()
    const [openFilter, setOpenFilter] = useState<boolean>(false);
    return (
        <>
            <div className="w-full h-max phone:mt-16 px-32 pt-10 flex flex-col gap-8">
                <div className="w-full h-40 bg-pink-500"></div>
                <div className="w-full h-max py-2 px-2 border-y border-gray-300 flex justify-between items-center">
                    <p className="text-gray-400">
                        <span className="text-gray-800">2727 Results</span>
                    </p>
                    <div
                        className="w-max h-max flex items-center gap-2 text-sm"
                        onClick={() => setOpenFilter(true)}
                    >
                        <svg
                            viewBox="0 0 14 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4"
                        >
                            <path
                                d="M13 8.667H7M4.333 8.667H1M13 3.333H9.667M7 3.333H1M4.333 10.667v-4M9.667 5.333v-4"
                                stroke="#080808"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></path>
                        </svg>
                        Filter & Sort
                    </div>
                </div>
                <div className="w-full h-max "></div>
            </div>
            <Drawer
                className=""
                open={openFilter}
                onClose={() => setOpenFilter(false)}
                placement="right"
                maskClosable
                closeIcon={false}
                style={{background: "none"}}
                width={500}
            >
                <div className="w-full h-screen  flex items-center justify-center px-10">
                    <div className="w-full h-[80%] bg-white rounded overflow-y-auto ">
                        <Collapse
                            accordion={false}
                            items={items}
                            bordered={false}
                            ghost
                            expandIconPosition="end"
                            className="p-6"
                            defaultActiveKey={"1"}
                        />
                    </div>
                </div>
            </Drawer>
        </>
    );
};

export default DynamicCollectionsHome;
