const passionFruitTree = {
    //Mùi
    name: "Mùi",
    results: ["Thơm", "Có mùi lạ"],
    descriptions: [
        "Quả có mùi thơm đặc trưng",
        "Quả không có mùi, hoặc có mùi lạ (Hóa chất, xộc hắc, thối, ..)",
    ],
    isLeave: false,
    node0: {
        //Độ nguyên vẹn
        name: "Độ nguyên vẹn",
        results: ["Nguyên vẹn", "Không nguyên vẹn"],
        descriptions: [
            "Xét về tổng thể quả còn nguyên vẹn như khi được thu hoạch: không dập nát, không có vết sâu đục,không bị trầy xước hoặc vết trầy xước không đáng kể (tương đương hoặc nhỏ hơn vết trầy do lấy móng tay bấm vào vỏ). Biểu hiện của vết dập là màu của vỏ có màu đạm bất thường, khi lấy tay nhấn vào những vị trí này sẽ thầy mềm.",
            "Xuất hiện các vết dập, sâu đục hoặc những vết trầy xước lớn",
        ],
        isLeave: false,
        node0: {
            //Màu vỏ
            name: "Màu vỏ",
            results: ["Tím đỏ", "Nhạt màu, hơi vàng", "Đỏ nâu"],
            images: [
                "https://image-us.eva.vn/upload/2-2020/images/2020-06-03/co-the-se-nhan-duoc-nhung-loi-ich-vang-khi-su-dung-chanh-leo-vao-mua-he-33d_result-1591155761-287-width640height398.jpg",
                "https://eminhatban.vn/img/uploads/images/Trung/chanh/chon-giong-chanh-leo%200.jpg",
                "https://i.vietgiaitri.com/2015/4/9/so-diep-xot-chanh-day-mon-ngon-ngay-he-e3ff6e.jpg",
            ],
            isLeave: false,
            node0: {
                //Tình trạng tốt
                isLeave: true,
                value: "good",
            },
            node1: {
                //Tình trạng tốt
                isLeave: true,
                value: "good",
            },
            node2: {
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
};

export default passionFruitTree;