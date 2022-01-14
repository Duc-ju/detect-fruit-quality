const rambutanTree = {
    //Độ cứng của vỏ
    name: "Độ cứng của vỏ",
    results: ["Giòn cứng", "Bị mềm bẹp"],
    descriptions: [
        "Vỏ giòn, cứng. Nhấn tay không bị lún",
        "Nhấn vào bị lún, không cứng",
    ],
    isLeave: false,
    node0: {
        //Màu vỏ
        name: "Màu vỏ",
        results: ["Đỏ", "Sậm màu, thâm đen"],
        images: [
            "https://nld.mediacdn.vn/2014/2-1chom-chom-1390291663667.jpg",
            "https://thucphamdongxanh.com/wp-content/uploads/2019/07/cach-chon-chom-chom.jpg",
        ],
        isLeave: false,
        node0: {
            //Độ nguyên vẹn
            name: "Độ nguyên vẹn",
            results: ["Lành lặn", "Không lành lặn"],
            descriptions: [
                "Xét về tổng thể quả còn nguyên vẹn như khi được thu hoạch: không dập nát, không có vết sâu đục,không bị trầy xước hoặc vết trầy xước không đáng kể",
                "Xuất hiện các vết dập, sâu đục hoặc những vết trầy xước lớn",
            ],
            isLeave: false,
            node0: {
                //Gai
                name: "Gai",
                results: ["Mềm vàng, héo úa", "Cứng, tươi"],
                images: [
                    "https://niengiamnongnghiep.vn/wp-content/uploads/2020/12/o5.jpg",
                    "https://thvm.vn/wp-content/uploads/2019/05/Chom-chom-2.jpg",
                ],
                isLeave: false,
                node0: {
                    //Tình trạng khá
                    isLeave: true,
                    value: "medium",
                },
                node1: {
                    //Tình trạng tốt
                    isLeave: true,
                    value: "good",
                },
            },
            node1: {
                //Tình trạng khá
                isLeave: true,
                value: "medium",
            },
        },
        node1: {
            //Độ nguyên vẹn
            name: "Độ nguyên vẹn",
            results: ["Lành lặn", "Không lành lặn"],
            descriptions: [
                "Xét về tổng thể quả còn nguyên vẹn như khi được thu hoạch: không dập nát, không có vết sâu đục,không bị trầy xước hoặc vết trầy xước không đáng kể",
                "Xuất hiện các vết dập, sâu đục hoặc những vết trầy xước lớn",
            ],
            isLeave: false,
            node0: {
                //Tình trạng khá
                isLeave: true,
                value: "medium",
            },
            node1: {
                //Gai
                name: "Gai",
                results: ["Mềm vàng, héo úa", "Cứng, tươi"],
                images: [
                    "https://niengiamnongnghiep.vn/wp-content/uploads/2020/12/o5.jpg",
                    "https://thvm.vn/wp-content/uploads/2019/05/Chom-chom-2.jpg",
                ],
                isLeave: false,
                node0: {
                    //Tình trạng tồi
                    isLeave: true,
                    value: "bad",
                },
                node1: {
                    //Tình trạng khá
                    isLeave: true,
                    value: "medium",
                },
            },
        },
    },
    node1: {
        //Tình trạng tồi
        isLeave: true,
        value: "bad",
    },
};

export default rambutanTree;