const litchiTree = {
    //Mùi
    name: "Mùi",
    results: ["Mùi thơm đặc trưng", "mùi lạ "],
    descriptions: [
        "Quả có mùi thơm đặc trưng",
        "Quả không mùi, có mùi lạ (mùi chua, mùi hóa chất, sộc hắc, thối, …)",
    ],
    isLeave: false,
    node0: {
        //Tình trạng vỏ
        name: "Tình trạng vỏ",
        results: ["Nguyên vẹn", "Không nguyên vẹn"],
        descriptions: [
            "Xét về tổng thể quả còn nguyên vẹn như khi được thu hoạch: không dập nát, không có vết sâu đục,không bị trầy xước hoặc vết trầy xước không đáng kể (tương đương hoặc nhỏ hơn vết trầy do lấy móng tay bấm vào vỏ). Biểu hiện của vết dập là màu của vỏ có màu đạm bất thường, khi lấy tay nhấn vào những vị trí này sẽ thầy mềm.",
            "Xuất hiện các vết dập, sâu đục hoặc những vết trầy xước lớn",
        ],
        isLeave: false,
        node0: {
            //Sâu cuống
            name: "Sâu cuống",
            results: ["Có", "Không"],
            descriptions: [
                "Đầu cuống có màu đen",
                "Đầu cuống trắng tinh",
            ],
            isLeave: false,
            node0: {
                //Tình trạng tồi
                isLeave: true,
                value: "bad",
            },
            node1: {
                //Đặc điểm gai
                name: "Đặc điểm gai",
                results: ["To, thưa, nhẵn", "Nhỏ, mau, nhọn"],
                images: [
                    "http://st.suckhoegiadinh.com.vn/staticFile/Subject/2021/05/22/2561016/vi-sao-qua-vai-duoc-coi-la-loai-trai-cay-tuyet-voi-cho-mua-he_221012422.jpg",
                    "https://meta.vn/Data/image/2021/05/04/an-vai-co-nong-khong-3.jpg",
                ],
                isLeave: false,
                node0: {
                    //Đặc điểm cuống và lá
                    name: "Đặc điểm cuống và lá",
                    results: ["Tươi", "Héo"],
                    images: [
                        "https://vnn-imgs-a1.vgcloud.vn/media.ex-cdn.com/EXP/media.giadinhvietnam.com/files/content/2020/05/22/meo-chon-vai-ngon-ngot-khong-bi-sau-dau-1-giadinhvietnam-09581217.png",
                        "https://nld.mediacdn.vn/291774122806476800/2021/6/3/1912138728135009628820129141105515498493401n-16227026669611774220705.jpg",
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
        },
        node1: {
            //Sâu cuống
            name: "Sâu cuống",
            results: ["Có", "Không"],
            descriptions: [
                "Đầu cuống có màu đen",
                "Đầu cuống trắng tinh",
            ],
            isLeave: false,
            node0: {
                //Đặc điểm cuống và lá
                name: "Đặc điểm cuống và lá",
                results: ["Tươi", "Héo"],
                images: [
                    "https://vnn-imgs-a1.vgcloud.vn/media.ex-cdn.com/EXP/media.giadinhvietnam.com/files/content/2020/05/22/meo-chon-vai-ngon-ngot-khong-bi-sau-dau-1-giadinhvietnam-09581217.png",
                    "https://nld.mediacdn.vn/291774122806476800/2021/6/3/1912138728135009628820129141105515498493401n-16227026669611774220705.jpg",
                ],
                isLeave: false,
                node0: {
                    //Đặc điểm gai
                    name: "Đặc điểm gai",
                    results: ["To, thưa, nhẵn", "Nhỏ, mau, nhọn"],
                    images: [
                        "http://st.suckhoegiadinh.com.vn/staticFile/Subject/2021/05/22/2561016/vi-sao-qua-vai-duoc-coi-la-loai-trai-cay-tuyet-voi-cho-mua-he_221012422.jpg",
                        "https://meta.vn/Data/image/2021/05/04/an-vai-co-nong-khong-3.jpg",
                    ],
                    isLeave: false,
                    node0: {
                        //Tình trạng khá
                        isLeave: true,
                        value: "medium",
                    },
                    node1: {
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
            },
            node1: {
                //Đặc điểm cuống và lá
                name: "Đặc điểm cuống và lá",
                results: ["Tươi", "Héo"],
                images: [
                    "https://vnn-imgs-a1.vgcloud.vn/media.ex-cdn.com/EXP/media.giadinhvietnam.com/files/content/2020/05/22/meo-chon-vai-ngon-ngot-khong-bi-sau-dau-1-giadinhvietnam-09581217.png",
                    "https://nld.mediacdn.vn/291774122806476800/2021/6/3/1912138728135009628820129141105515498493401n-16227026669611774220705.jpg",
                ],
                isLeave: false,
                node0: {
                    //Tình trạng khá
                    isLeave: true,
                    value: "medium",
                },
                node1: {
                    //Tình trạng tồi
                    isLeave: true,
                    value: "bad",
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

export default litchiTree;