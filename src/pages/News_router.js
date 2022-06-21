import React, { useEffect, useState } from 'react'
import { Card } from 'antd';
import axios from 'axios';




const News_router = () => {
    const [data, setData] = useState({ list: [] });
    useEffect(() => {
        axios.get(`https://voucher-hunter.herokuapp.com/api/product?page=1&size=5&fbclid=IwAR0QYgiqnCmnt0qEuRsOFuOl0pcNWfJsD3hTD6da_94nvFQLGN-oT7sgeNE`).then((res) => {
            console.log(res.data.list);
            setData(res.data);

        })
    }, [])

    return (
        <div className="page-wrapper">
            <h1 style={{ marginTop: "60px" }}>TIN TỨC</h1>
            <div style={{ display: "grid", gridTemplateColumns: "auto auto auto auto", gap: "10px", marginBottom: "90px" }}>
                {/* <div style={{ display: "grid", gridTemplateColumns: "auto auto auto auto" }}>
                {data.list.map(item => (

                    <Card key={item.id} style={{ margin: "20px", boxShadow: "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px" }}>
                        <img src={item.images[0]} alt="Paris" style={{ width: "100%", height: "140px", borderRadius: "10px", marginBottom: "10px" }} />
                        <span style={{ color: "red", fontFamily: "'Nunito', sans-serif" }}>{item.name}</span>
                    </Card>
                ))}
            </div> */}
                {data.list.map(item => (
                    <Card key={item.id} style={{ boxShadow: "-4px 20px 30px rgb(0 0 0 / 10%), 4px -15px 30px rgb(0 0 0 / 5%)", borderRadius: "10px", lineHeight: "40px" }}>
                        <img src={item.images[1]} alt="Paris" style={{ width: "100%", borderRadius: "10px", marginBottom: "10px" }} />
                        <span style={{ color: " #bfbfbf" }}>DESIGN</span>
                        <span style={{ color: " #bfbfbf", marginLeft: "10px" }}>INTERIOR</span>
                        <h2 style={{ fontFamily: "Roboto", fontSize: "20px", fontWeight: "700" }}>Chương trình khuyến mãi đặc biệt</h2>
                        <span>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeeUl9IZDN97pBQNgeunx6dD1df-4g7vkPFw&usqp=CAU" style={{ width: "30px", height: "30px", borderRadius: "50%" }}></img>
                        </span>
                        <span style={{ marginLeft: "10px", fontWeight: "500" }}>Sweethomy</span>
                        <span style={{ marginLeft: "10px", color: " #bfbfbf" }}>2 hour ago</span>

                    </Card>
                ))}
                {/* <Card style={{ boxShadow: "-4px 20px 30px rgb(0 0 0 / 10%), 4px -15px 30px rgb(0 0 0 / 5%)", borderRadius: "10px", width: "300px", height: "auto", lineHeight: "40px" }}>
                    <img src="https://anhdep123.com/hinh-thap-eiffel-dep-nhat/" alt="Paris" style={{ width: "100%", borderRadius: "10px", marginBottom: "10px" }} />
                    <span style={{ color: " #bfbfbf" }}>DESIGN</span>
                    <span style={{ color: " #bfbfbf", marginLeft: "10px" }}>INTERIOR</span>
                    <h2 style={{ fontFamily: "Zapf Chancery, cursive", fontSize: "20px" }}>Chương trình khuyến mãi đặc biệt</h2>
                    <span>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeeUl9IZDN97pBQNgeunx6dD1df-4g7vkPFw&usqp=CAU" style={{ width: "30px", height: "30px", borderRadius: "50%" }}></img>
                    </span>
                    <span style={{ marginLeft: "10px", fontWeight: "500" }}>Sweethomy</span>
                    <span style={{ marginLeft: "10px", color: " #bfbfbf" }}>2 hour ago</span>

                </Card>
                <Card style={{ boxShadow: "-4px 20px 30px rgb(0 0 0 / 10%), 4px -15px 30px rgb(0 0 0 / 5%)", borderRadius: "10px", width: "300px", height: "auto", lineHeight: "40px" }}>
                    <img src="https://anhdep123.com/hinh-thap-eiffel-dep-nhat/" alt="Paris" style={{ width: "100%", borderRadius: "10px", marginBottom: "10px" }} />
                    <span style={{ color: " #bfbfbf" }}>DESIGN</span>
                    <span style={{ color: " #bfbfbf", marginLeft: "10px" }}>INTERIOR</span>
                    <h2 style={{ fontFamily: "Zapf Chancery, cursive", fontSize: "20px" }}>Chương trình khuyến mãi đặc biệt</h2>
                    <span>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeeUl9IZDN97pBQNgeunx6dD1df-4g7vkPFw&usqp=CAU" style={{ width: "30px", height: "30px", borderRadius: "50%" }}></img>
                    </span>
                    <span style={{ marginLeft: "10px", fontWeight: "500" }}>Sweethomy</span>
                    <span style={{ marginLeft: "10px", color: " #bfbfbf" }}>2 hour ago</span>

                </Card>
                <Card style={{ boxShadow: "-4px 20px 30px rgb(0 0 0 / 10%), 4px -15px 30px rgb(0 0 0 / 5%)", borderRadius: "10px", width: "300px", height: "auto", lineHeight: "40px" }}>
                    <img src="https://anhdep123.com/hinh-thap-eiffel-dep-nhat/" alt="Paris" style={{ width: "100%", borderRadius: "10px", marginBottom: "10px" }} />
                    <span style={{ color: " #bfbfbf" }}>DESIGN</span>
                    <span style={{ color: " #bfbfbf", marginLeft: "10px" }}>INTERIOR</span>
                    <h2 style={{ fontFamily: "Zapf Chancery, cursive", fontSize: "20px" }}>Chương trình khuyến mãi đặc biệt</h2>
                    <span>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeeUl9IZDN97pBQNgeunx6dD1df-4g7vkPFw&usqp=CAU" style={{ width: "30px", height: "30px", borderRadius: "50%" }}></img>
                    </span>
                    <span style={{ marginLeft: "10px", fontWeight: "500" }}>Sweethomy</span>
                    <span style={{ marginLeft: "10px", color: " #bfbfbf" }}>2 hour ago</span>

                </Card>
                <Card style={{ boxShadow: "-4px 20px 30px rgb(0 0 0 / 10%), 4px -15px 30px rgb(0 0 0 / 5%)", borderRadius: "10px", width: "300px", height: "auto", lineHeight: "40px" }}>
                    <img src="https://anhdep123.com/hinh-thap-eiffel-dep-nhat/" alt="Paris" style={{ width: "100%", borderRadius: "10px", marginBottom: "10px" }} />
                    <span style={{ color: " #bfbfbf" }}>DESIGN</span>
                    <span style={{ color: " #bfbfbf", marginLeft: "10px" }}>INTERIOR</span>
                    <h2 style={{ fontFamily: "Zapf Chancery, cursive", fontSize: "20px" }}>Chương trình khuyến mãi đặc biệt</h2>
                    <span>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeeUl9IZDN97pBQNgeunx6dD1df-4g7vkPFw&usqp=CAU" style={{ width: "30px", height: "30px", borderRadius: "50%" }}></img>
                    </span>
                    <span style={{ marginLeft: "10px", fontWeight: "500" }}>Sweethomy</span>
                    <span style={{ marginLeft: "10px", color: " #bfbfbf" }}>2 hour ago</span>

                </Card>
                <Card style={{ boxShadow: "-4px 20px 30px rgb(0 0 0 / 10%), 4px -15px 30px rgb(0 0 0 / 5%)", borderRadius: "10px", width: "300px", height: "auto", lineHeight: "40px" }}>
                    <img src="https://anhdep123.com/hinh-thap-eiffel-dep-nhat/" alt="Paris" style={{ width: "100%", borderRadius: "10px", marginBottom: "10px" }} />
                    <span style={{ color: " #bfbfbf" }}>DESIGN</span>
                    <span style={{ color: " #bfbfbf", marginLeft: "10px" }}>INTERIOR</span>
                    <h2 style={{ fontFamily: "Zapf Chancery, cursive", fontSize: "20px" }}>Chương trình khuyến mãi đặc biệt</h2>
                    <span>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeeUl9IZDN97pBQNgeunx6dD1df-4g7vkPFw&usqp=CAU" style={{ width: "30px", height: "30px", borderRadius: "50%" }}></img>
                    </span>
                    <span style={{ marginLeft: "10px", fontWeight: "500" }}>Sweethomy</span>
                    <span style={{ marginLeft: "10px", color: " #bfbfbf" }}>2 hour ago</span>

                </Card>
                <Card style={{ boxShadow: "-4px 20px 30px rgb(0 0 0 / 10%), 4px -15px 30px rgb(0 0 0 / 5%)", borderRadius: "10px", width: "300px", height: "auto", lineHeight: "40px" }}>
                    <img src="https://anhdep123.com/hinh-thap-eiffel-dep-nhat/" alt="Paris" style={{ width: "100%", borderRadius: "10px", marginBottom: "10px" }} />
                    <span style={{ color: " #bfbfbf" }}>DESIGN</span>
                    <span style={{ color: " #bfbfbf", marginLeft: "10px" }}>INTERIOR</span>
                    <h2 style={{ fontFamily: "Zapf Chancery, cursive", fontSize: "20px" }}>Chương trình khuyến mãi đặc biệt</h2>
                    <span>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeeUl9IZDN97pBQNgeunx6dD1df-4g7vkPFw&usqp=CAU" style={{ width: "30px", height: "30px", borderRadius: "50%" }}></img>
                    </span>
                    <span style={{ marginLeft: "10px", fontWeight: "500" }}>Sweethomy</span>
                    <span style={{ marginLeft: "10px", color: " #bfbfbf" }}>2 hour ago</span>

                </Card>
                <Card style={{ boxShadow: "-4px 20px 30px rgb(0 0 0 / 10%), 4px -15px 30px rgb(0 0 0 / 5%)", borderRadius: "10px", width: "300px", height: "auto", lineHeight: "40px" }}>
                    <img src="https://anhdep123.com/hinh-thap-eiffel-dep-nhat/" alt="Paris" style={{ width: "100%", borderRadius: "10px", marginBottom: "10px" }} />
                    <span style={{ color: " #bfbfbf" }}>DESIGN</span>
                    <span style={{ color: " #bfbfbf", marginLeft: "10px" }}>INTERIOR</span>
                    <h2 style={{ fontFamily: "Zapf Chancery, cursive", fontSize: "20px" }}>Chương trình khuyến mãi đặc biệt</h2>
                    <span>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeeUl9IZDN97pBQNgeunx6dD1df-4g7vkPFw&usqp=CAU" style={{ width: "30px", height: "30px", borderRadius: "50%" }}></img>
                    </span>
                    <span style={{ marginLeft: "10px", fontWeight: "500" }}>Sweethomy</span>
                    <span style={{ marginLeft: "10px", color: " #bfbfbf" }}>2 hour ago</span>

                </Card> */}

            </div>



        </div >
    )
}
export default News_router;
