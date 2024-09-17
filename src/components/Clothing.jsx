import { IoMdArrowDropdown } from "react-icons/io";
import { DropDown } from './DropDown';
import { NavIcons } from './NavIcons';
import { clothes } from '../data/headerdata';
import { Footer } from './Footer';
import { Info } from './Info';
import RangeSlider from './Slider';
import { products } from '../data/headerdata';
import { HiViewGrid } from "react-icons/hi";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { FaListUl } from "react-icons/fa";
import { useEffect, useState } from "react";
import { IoStarSharp } from "react-icons/io5";
import { IoIosStarHalf } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addCart } from "./features/CartSlice";


export const Clothing = () => {
    const [hovered, setHovered] = useState(null);
    const [columns, setColumns] = useState('4');
    const [category, setCategory] = useState([]);
    const [sortValue, setSortValue] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(products);
    const dispatch = useDispatch();

    const addToCart = (product) => {
        dispatch(addCart(product));
    }

    const handleChange = (e) => {
        const { name, checked } = e.target;
        if (checked) {
            setCategory([...category, name]);
        } else {
            const categories = category.filter((item) => item !== name);
            setCategory(categories);
        }
    };

    console.log(category);

    const handleSort = (e) => {
        const { value } = e.target;
        setSortValue(value);
    };

    useEffect(() => {
        let updatedProducts = products.filter((product) => category.length === 0 || category.includes(product.category));

        // Handle sorting based on sortValue
        if (sortValue === 'Z-A') {
            updatedProducts = [...updatedProducts].sort((a, b) => b.title.localeCompare(a.title));
        } else if (sortValue === 'A-Z') {
            updatedProducts = [...updatedProducts].sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortValue === 'lo-hi') {
            updatedProducts = [...updatedProducts].sort((a, b) => a.price - b.price);
        } else if (sortValue === 'hi-lo') {
            updatedProducts = [...updatedProducts].sort((a, b) => b.price - a.price);
        }

        setFilteredProducts(updatedProducts); // Update state after sorting/filtering
    }, [category, sortValue]);



    return (
        <div>
            <div className='flex m-2 ml-4 mr-4 justify-between text-[14px] opacity-90'>
                <div className='flex gap-4'>
                    <p>+91 6284758664</p>
                    <p>sunil@aronwebsolutions.com</p>
                </div>
                <p>Sign up for 10% off your first order</p>
                <div className='flex gap-4'>
                    <p>Our Stores</p>
                    <p className='flex items-center'>United States (USD $) <IoMdArrowDropdown /></p>
                    <p className='flex items-center'>English <IoMdArrowDropdown /></p>
                </div>
            </div>

            <hr className="h-px bg-gray-100 border-0 dark:bg-gray-200" />


            <div className='flex justify-center items-center relative z-20 mt-10'>
                <div className='absolute left-20'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_tiOElKFKwwfVbwXSQKo9t8WKtzZ42_zhaA&s" alt="LtRoz" width={40} />
                </div>
                <div className='absolute right-6 text-center'>
                    <NavIcons />
                </div>
            </div>

            <DropDown />

            <div className='mt-10 h-52 gap-6 text-white flex flex-col justify-center items-center bg-[url("//umino-demo.myshopify.com/cdn/shop/files/shop-banner.jpg?v=1680235225")]'>
                <h3 className='text-4xl'>Denim Shirt</h3>
                <p className='text-[14px]'>Home / Denim Shirt</p>
            </div>

            <div className='flex mx-4 my-14 gap-8 h-full'>
                {
                    clothes.map((product, id) => (
                        <div key={id} className='border rounded-lg relative overflow-hidden'>
                            <img src={product.image} alt={product.desc} className='scale-100 hover:scale-110 duration-500 hover:cursor-pointer' />
                            <div className='absolute bottom-5 left-12'>
                                <button className='bg-white p-2 w-36 border rounded-full'> {product.desc}</button>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className='mx-6 flex my-4'>

                <div className='w-[20%]'>

                    <div>
                        <h3 className='font-medium text-[17px]'>Category</h3>
                        <div className='opacity-70 flex flex-col gap-2 mt-2'>
                            <p className='text-[16px] font-medium'>Dresses</p>
                            <p className='text-[16px] font-medium'> Sweaters</p>
                            <p className='text-[16px] font-medium'>Women’s Shirts</p>
                            <p className='text-[16px] font-medium'> Top T-shirt</p>
                        </div>
                    </div>

                    <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-300" />

                    <div>
                        <h3 className='font-medium text-[17px]'>Availability</h3>

                        <div className='flex items-center gap-3 opacity-70 my-3 ml-4 text-[15px]'>
                            <input type="checkbox" name="In Stock" id="in-stock" />
                            <label htmlFor="in-stock">In Stock</label>
                        </div>

                        <div className='flex items-center gap-3 opacity-70 my-3 ml-4 text-[15px]'>
                            <input type="checkbox" name="Out Of Stock" id="out-of-stock" />
                            <label htmlFor="out-of-stock">Out Of Stock</label>
                        </div>

                    </div>

                    <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-300" />

                    <div>
                        <h3 className='font-medium text-[17px]'>Price</h3>
                        <RangeSlider />
                        <p className='opacity-70 flex gap-1 text-center'>Price:
                            <span className='font-bold'>$0.00 - $200.00</span></p>
                    </div>

                    <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-300" />

                    <div className='overflow-scroll h-[200px]'>
                        <h3 className='font-medium text-[17px]'>Types</h3>
                        <div>
                            <div className='flex items-center gap-3 opacity-70 my-3 ml-4 text-[15px] font-medium'>
                                <input type="checkbox" name="Crop Top" id="crop-top" onChange={handleChange} />
                                <label htmlFor="crop-top">Crop Top</label>
                            </div>
                            <div className='flex items-center gap-3 opacity-70 my-3 ml-4 text-[15px] font-medium'>
                                <input type="checkbox" name="Warm Clothes" id="warm-clothes" onChange={handleChange} />
                                <label htmlFor="warm-clothes">Warm Clothes</label>
                            </div>
                            <div className='flex items-center gap-3 opacity-70 my-3 ml-4 text-[15px] font-medium'>
                                <input type="checkbox" name="Hand Bag" id="hand-bag" onChange={handleChange} />
                                <label htmlFor="hand-bag">Hand Bag</label>
                            </div>
                            <div className='flex items-center gap-3 opacity-70 my-3 ml-4 text-[15px] font-medium'>
                                <input type="checkbox" name="Oversized Clothes" id="oversized-clothes" onChange={handleChange} />
                                <label htmlFor="oversized-clothes">Oversized Clothes</label>
                            </div>
                        </div>
                    </div>

                    <hr className="h-px my-6 bg-gray-200 border-0 dark:bg-gray-300" />

                    <div className='flex flex-wrap'>
                        <h3 className='font-medium text-[17px]'>Size</h3>
                        <div className='mt-3'>
                            <button className='w-12 border m-1 opacity-80'>L</button>
                            <button className='w-12 border m-1 opacity-80'>XL</button>
                            <button className='w-12 border m-1 opacity-80'>M</button>
                            <button className='w-12 border m-1 opacity-80'>S</button>
                            <button className='w-16 border m-1 opacity-80'>XXL</button>
                        </div>
                    </div>

                    <hr className="h-px my-6 bg-gray-200 border-0 dark:bg-gray-300" />

                    <div>
                        <img src="https://umino-demo.myshopify.com/cdn/shop/files/banner.png?v=1700473199&width=330" className='border rounded-lg h-96 hover:cursor-pointer' />
                    </div>

                </div>

                <div className='mx-8 w-[80%] '>
                    <div className='flex items-center justify-between opacity-70 font-medium'>
                        <div>
                            <p>There are {filteredProducts.length} results in total</p>

                        </div>
                        <div className='flex items-center gap-3'>
                            <HiViewGrid size={20} onClick={() => setColumns('2')} className='hover:cursor-pointer' />
                            <BsFillGrid3X3GapFill onClick={() => setColumns('3')} size={16} className='hover:cursor-pointer' />
                            <TfiLayoutGrid4Alt onClick={() => setColumns('4')} size={16} className='hover:cursor-pointer' />
                            <FaListUl onClick={() => setColumns('1')} className='hover:cursor-pointer' />
                        </div>

                        <div className='flex gap-2 text-center'>
                            <label htmlFor="sort">Sort by:</label>

                            <select id="sort" className='flex gap-1 font-semibold opacity-100' onChange={handleSort}>
                                <option value="A-Z" >Alphabetically, A-Z</option>
                                <option value="Z-A" >Alphabetically, Z-A</option>
                                <option value="lo-hi">Price, low to high</option>
                                <option value="hi-lo" >Price, high to low</option>
                            </select>
                        </div>
                    </div>

                    <div className={`mx-auto mt-6 grid gap-4 ${columns === '1' ? 'grid-cols-1' : columns === '2' ? 'grid-cols-2' : columns === '3' ? 'grid-cols-3' : 'grid-cols-4'}`}>

                        {filteredProducts.map((product) => (
                            <div key={product.id} className='hover:cursor-pointer gap-2 flex flex-col items-center mx-auto m-6'>
                                <div
                                    className="relative w-full overflow-hidden "
                                    onMouseEnter={() => setHovered(product.id)}
                                    onMouseLeave={() => setHovered(null)}
                                >
                                    <img
                                        src={hovered === product.id ? product.image2 : product.image1}
                                        alt={product.title}
                                        className="relative object-cover transition-all duration-1000 ease-in-out aspect-square block"

                                    />
                                    {
                                        hovered === product.id && (
                                            <div className=" flex justify-center items-center gap-4">
                                                <button className="absolute bottom-2 left-11 right-0 bg-white w-44 rounded-full h-10 hover:bg-black hover:text-white hover:duration-500" onClick={() => { addToCart(product) }}>Add to Cart</button>
                                                <FaRegHeart size={22} className="absolute top-3 right-3 hover:bg-black hover:text-white hover:cursor-pointer hover:duration-500" />
                                            </div>
                                        )
                                    }

                                </div>
                                <p className="mt-2">{product.title}</p>
                                <div className='flex w-[65px]'>
                                    {Array(Math.floor(product.rating)).fill().map((_, i) => (
                                        <IoStarSharp key={i} />
                                    ))}
                                    {product.rating % 1 !== 0 && <IoIosStarHalf />}
                                </div>
                                <p className='text-[15px] flex gap-2'>
                                    <span className='text-red-600'>${product.price.toFixed(2)}</span>
                                    <span className='line-through opacity-55'>${product.oldPrice.toFixed(2)}</span>
                                </p>

                            </div>
                        ))}

                    </div>
                    <div className="relative">
                        <p className="text-center m-4 opacity-80 ">Showing {filteredProducts.length} of {products.length} products</p>

                    </div>
                </div>
            </div>

            <Info />
            <Footer />
        </div >
    )
}
