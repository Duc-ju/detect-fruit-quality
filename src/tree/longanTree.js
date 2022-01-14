const longanTree = {
    //Độ nguyên vẹn
    name: "Độ lành lặn của vỏ",
    results: ["Nguyên vẹn, lành lặn", "Không nguyên vẹn, Không lành lặn"],
    descriptions: [
        "Vỏ quả lành lặn, không có dấu vết sâu bệnh, động vật ăn, không có lỗ, những quả bị nứt nhỏ hay vết va chạm nhẹ thì có thể coi là lành lặn",
        "Vỏ quả có dấu vết sâu bệnh, động vật ăn, có lỗ hoặc bị nứt dập nhiều",
    ],
    images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK3j3KJTd2J9JrVXvGrQudEvMDzx_wRDhowg&usqp=CAU",
        "https://raw.githubusercontent.com/Duc-ju/detect-fruit-quality/main/public/photos/download.jpg",
    ],
    isLeave: false,
    node0: {
        //Mùi
        name: "Mùi",
        results: ["Thơm, thanh mát đặc trưng", "Mùi men chua, mùi hắc hóa chất, mùi lạ"],
        descriptions: [
            "Nhãn có mùi thanh mát, chứng tỏ quả nhãn chín cây, không có chất bảo quản, không bị ủng mốc",
            "Nhãn có mùi chua chứng tỏ đã bị chín quá, mùi hắc hay mùi lạ thì rất có thể nhãn đã bị bôi thuốc bảo quản, chúng ta không nên ăn những quả có mùi như thế!",
        ],
        isLeave: false,
        node0: {
            //Cành
            name: "Cành",
            results: ["Có", "Không"],
            descriptions: [
                "Quả nhãn có phần cuống vẫn gắn chặt vào cành",
                "Quả nhãn đã bị rụng khỏi cành",
            ],
            images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT80uEViS9Jg-iQXRg3mYT0zwVzYpjWjMXNig&usqp=CAU",
                "https://raw.githubusercontent.com/Duc-ju/detect-fruit-quality/main/public/photos/images.jpg",
            ],
            isLeave: false,
            node0: {
                //Bề mặt vỏ
                name: "Bề mặt vỏ",
                results: ["Nhẵn bóng, căng mọng", "xù xì"],
                descriptions: [
                    "Quả có bề mặt như này thì bên ngoài vỏ mỏng, bên trong cùi sẽ dày và nhiều nước hơn",
                    "quả có bề mặt vỏ như này thì thường vỏ sẽ dày, cùi hơi khô, ăn không được ngon lắm",
                ],
                images: [
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNTvaa6YiVV10352PoO0NCVeH3EKgJf4ezhw&usqp=CAU",
                    "https://photo-cms-kienthuc.zadn.vn/zoom/800/Uploaded/tructoasoan/2020_05_31/vot_2/nhan_1_PQDL.jpg",
                ],
                isLeave: false,
                node0: {
                    //Màu vỏ
                    name: "Màu vỏ",
                    results: ["Không còn màu xanh", "Còn màu xanh"],
                    descriptions: [
                        "Quả nhãn có thể đã già và dựa vào đây ta phải xem xét các thuộc tính khác để kết luận",
                        "Quả nhãn có vỏ vẫn còn màu xanh chứng tỏ nó chưa được già, vỏ còn dày, cùi mỏng, hạt to và chưa đủ độ ngọt",
                    ],
                    images: [
                        "https://photo-cms-bizlive.zadn.vn/uploaded/tuanviet_tt/2018_07_30/nhan-dau-mua-1_swba.jpg",
                        "https://ketqua247.net/public/media/thumb/news/mo-thay-qua-nhan-2-560x293.jpg",
                    ],
                    isLeave: false,
                    node0: {
                        //Độ tươi của vỏ
                        name: "Độ tươi của vỏ",
                        results: ["Tươi", "Khô"],
                        descriptions: [
                            "Ta có thể bóp nhẹ quả nhãn, nếu như vỏ có độ đàn hồi tốt, mềm, không bị giòn thì là quả còn tươi, mới hái",
                            "Ta có thể bóp nhẹ quả nhãn, nếu như vỏ có độ đàn hồi không tốt, có cảm giác cứng, giòn thì tức là quả đã hái lâu và bị khô vỏ",
                        ],
                        isLeave: false,
                        node0: {
                            //Tình trạng tốt
                            isLeave: true,
                            value: "good",
                        },
                        node1: {
                            //Tình trạng khá
                            isLeave: true,
                            value: "medium",
                        },
                    },
                    node1: {
                        //Tình trạng khá
                        isLeave: true,
                        value: "medium",
                    },
                },
                node1: {
                    //Tình trạng khá
                    isLeave: true,
                    value: "medium",
                },
            },
            node1: {
                //Tình trạng khá
                isLeave: true,
                value: "medium",
            },
        },
        node1: {
            //Tình trạng tồi
            isLeave: true,
            value: "bad",
        },
        node2: {
            //Tình trạng tồi
            isLeave: true,
            value: "bad",
        },
    },
    node1: {
        //Tình trạng tồi
        isLeave: true,
        value: "bad",
    },
};

export default longanTree;