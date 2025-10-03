
import Button from "./button";
import SearchAndFilter from "./search";

const databt = [
    {
        name: 'Trang chủ',
        svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#B22222" stroke-width="1.5"><path stroke-linecap="round" d="M22 22H2m0-11l4.063-3.25M22 11l-8.126-6.5a3 3 0 0 0-3.748 0l-.782.625M15.5 5.5v-2A.5.5 0 0 1 16 3h2.5a.5.5 0 0 1 .5.5v5M4 22V9.5m16 0v4m0 8.5v-4.5" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 22v-5c0-1.414 0-2.121-.44-2.56C14.122 14 13.415 14 12 14s-2.121 0-2.56.44M9 22v-5" /><path d="M14 9.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z" /></g></svg>,
        href: "/"
    },
    {
        name: 'Dự án',
        svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="6" r="1" fill="#CC5500" /><path fill="#CC5500" d="M6 17h12v2H6zm4-5.17l2.792 2.794l3.932-3.935L18 12V8h-4l1.31 1.275l-2.519 2.519L10 9l-4 4l1.414 1.414z" /><path fill="#CC5500\" d="M19 3h-3.298a5 5 0 0 0-.32-.425l-.01-.012a4.43 4.43 0 0 0-2.89-1.518a2.6 2.6 0 0 0-.964 0a4.43 4.43 0 0 0-2.89 1.518l-.01.012a5 5 0 0 0-.32.424V3H5a3.003 3.003 0 0 0-3 3v14a3.003 3.003 0 0 0 3 3h14a3.003 3.003 0 0 0 3-3V6a3.003 3.003 0 0 0-3-3m1 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4.55a2.5 2.5 0 0 1 4.9 0H19a1 1 0 0 1 1 1Z" /></svg>,
        href: "/project"
    },
    {
        name: 'Mua bán',
        svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024"><path fill="#800080" d="M704 288h131.072a32 32 0 0 1 31.808 28.8L886.4 512h-64.384l-16-160H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96H217.92l-51.2 512H512v64H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4zm-64 0v-22.336C640 189.248 582.272 128 512 128s-128 61.248-128 137.664v22.4h256zm201.408 483.84L768 698.496V928a32 32 0 1 1-64 0V698.496l-73.344 73.344a32 32 0 1 1-45.248-45.248l128-128a32 32 0 0 1 45.248 0l128 128a32 32 0 1 1-45.248 45.248" /></svg>,
        href: "/rental"
    },
    {
        name: 'Cho thuê',
        svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36"><path fill="#006400" d="M8 8.2h16v1.6H8zm0 8h8.086v1.6H8zm15.378-4H8v1.6h13.779zM12.794 29.072a2.47 2.47 0 0 0 2.194.824h7.804a.7.7 0 0 0 0-1.4h-7.804c-.911-.016-.749-.807-.621-1.052a4 4 0 0 0 .387-.915a1.18 1.18 0 0 0-.616-1.322a1.9 1.9 0 0 0-2.24.517c-.344.355-.822.898-1.28 1.426c.283-1.109.65-2.532 1.01-3.92a1.315 1.315 0 0 0-.755-1.626a1.425 1.425 0 0 0-1.775.793c-.432.831-3.852 6.562-3.886 6.62a.7.7 0 1 0 1.202.718c.128-.215 2.858-4.788 3.719-6.315c-.648 2.5-1.362 5.282-1.404 5.532a.87.87 0 0 0 .407.969a.92.92 0 0 0 1.106-.224c.126-.114.362-.385.957-1.076a62 62 0 0 1 1.703-1.921c.218-.23.35-.128.222.098a2.29 2.29 0 0 0-.33 2.274" /><path fill="#013220" d="M28 21.695V32H4V4h24v4.993l1.33-1.33a4.3 4.3 0 0 1 .67-.54V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V21.427a2.9 2.9 0 0 1-2 .268" /><path fill="#004d00" d="m34.128 11.861l-.523-.523a1.9 1.9 0 0 0-.11-2.423a1.956 1.956 0 0 0-2.75.162L18.22 21.6l-.837 3.142a.234.234 0 0 0 .296.294l3.131-.847l11.692-11.692l.494.495a.37.37 0 0 1 0 .525l-4.917 4.917a.8.8 0 0 0 1.132 1.131l4.917-4.917a1.97 1.97 0 0 0 0-2.788" /></svg>,
        href: ""
    },
    {
        name: 'Tiện ích',
        svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#ff0f" stroke-linecap="round" stroke-width="1.5" d="M16.5 19.857V21m0-1.143a2.93 2.93 0 0 1-2.427-1.272m2.427 1.272a2.93 2.93 0 0 0 2.427-1.272M16.5 14.143a2.93 2.93 0 0 1 2.427 1.272M16.5 14.143a2.93 2.93 0 0 0-2.427 1.272m2.427-1.272V13m3.5 1.714l-1.073.701M13 19.285l1.073-.7M13 14.715l1.073.7M20 19.285l-1.073-.7m0-3.17a2.8 2.8 0 0 1 0 3.17m-4.854-3.17a2.8 2.8 0 0 0 0 3.17M4 3h16M4 9h16M4 15h5" /></svg>,
        href: ""
    },
    {
        name: 'Giới thiệu',
        svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" /><path fill="#00ff" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m0 11a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0-9a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1" /></g></svg>,
        href: "/introduce"
    }
]

const Header = () => {

    return (
        <div className="flex-col text-white bg-gray-200 h-20">
            <div className="flex bg-sky-800 w-[100%] h-20 fixed top-0 z-50">
                <div className="  items-center flex h-20 w-[30%] justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32"><path fill="currentColor" d="M30.48 18.29h-1.53v-1.52h-1.52v-1.53h-1.52V0H10.67v9.15H9.14V6.1H6.1V1.53H4.57V6.1H1.52v3.05H0V32h30.48v-9.14H32v-3.05h-1.52ZM3.05 7.62h4.57v1.53H3.05Zm7.62 12.19H9.14v3.05h1.53v7.62H1.52V10.67h9.15Zm1.52-18.28h12.19V12.2h-1.52v-1.53h-1.53V9.15h-1.52v1.52h-1.52v1.53h-1.53v1.52h-1.52v1.52h-1.52v1.53h-1.53Zm16.76 28.95h-4.57v-6.09h-1.52v6.09h-4.57v-1.52h1.52v-1.53h-1.52v-3.04h-1.53v6.09h-4.57V19.81h1.53v-1.52h1.52v-1.52h1.52v-1.53h1.53v-1.52h1.52V12.2h1.52v1.52h1.53v1.52h1.52v1.53h1.53v1.52h1.52v1.52h1.52Z" /><path fill="currentColor" d="M15.24 19.81h10.67v1.53H15.24Zm3.05 3.05h4.57v1.53h-4.57Zm1.52-19.81h3.05V6.1h-3.05Zm-6.09 4.57h3.04v3.05h-3.04Zm0-4.57h3.04V6.1h-3.04ZM4.57 25.91h3.05v3.05H4.57Zm0-6.1h3.05v3.05H4.57Zm0-6.09h3.05v3.05H4.57Z" /></svg>
                    <span className="text-xl font-bold pl-2">Real Estate</span>
                </div>
                <div className="flex items-center w-[40%] ">
                    <SearchAndFilter />
                </div>
                <div className="w-[30%] flex items-center h-20 justify-end gap-3 pr-4">
                    <a href="/register" className="active:scale-95 hover:bg-sky-800 hover:scale-105 flex border-2 rounded-md gap-2 bg-blue-500 w-[30%]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6v12m-6-6h12" /></svg>
                        <span>Đăng ký</span>
                    </a>
                    <a href="/login" className="hover:transition-colors duration-100 active:scale-95 ease-in-out hover:scale-105 hover:bg-red-900 flex border-2 rounded-md gap-2 bg-red-500 w-[30%]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13 21q-.425 0-.712-.288T12 20t.288-.712T13 19h6V5h-6q-.425 0-.712-.288T12 4t.288-.712T13 3h6q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm-1.825-8H4q-.425 0-.712-.288T3 12t.288-.712T4 11h7.175L9.3 9.125q-.275-.275-.275-.675t.275-.7t.7-.313t.725.288L14.3 11.3q.3.3.3.7t-.3.7l-3.575 3.575q-.3.3-.712.288T9.3 16.25q-.275-.3-.262-.712t.287-.688z" /></svg>
                        <span>Đăng nhập</span>
                    </a>
                    <a className="rounded-full border-2 ml-2" href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M8 7a4 4 0 1 1 8 0a4 4 0 0 1-8 0m0 6a5 5 0 0 0-5 5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3a5 5 0 0 0-5-5z" clip-rule="evenodd" /></svg>
                    </a>
                </div>
            </div>
            <div className="mt-20 gap-2 flex items-center border-2 justify-center h-[90px] min-w-full sticky top-0">
                {databt.map((item, index) => (
                    <Button key={index} svg={item.svg} name={item.name} href={item.href} />
                ))}
            </div>

        </div>
    );
}

export default Header;