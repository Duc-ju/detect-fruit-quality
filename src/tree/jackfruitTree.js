const jackfruitTree = {
    //Độ nguyên vẹn
    name: "Độ nguyên vẹn",
    results: ["Nguyên vẹn, lành lặn", "Không nguyên vẹn, Không lành lặn"],
    descriptions: [
        "Quả mít không bị dập nát, không bị ủng thối, có vết nấm mốc, vết động vật ăn trong một số trường hợp nếu như ta thấy các dấu hiệu này nhưng nó rất nhỏ thì vẫn có thể coi là nguyên vẹn",
        "Quả mít bị dập nát, không bị ủng thối, có vết nấm mốc vết động vật ăn",
    ],
    images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4_HqVFsxu0CAqNiqoulGLurlNtv8pPXLcYPxGFUifZi4GHcinJDqrEQI9T9109xPpHUI&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyLTLNFOMJMjW5gT4V6oDBRPGoKWZR7UyLng&usqp=CAU",
    ],
    isLeave: false,
    node0: {
        //Mùi
        name: "Mùi",
        results: ["Thơm", "Mùi lạ, không mùi"],
        descriptions: [
            "Mùi thơm chứng tỏ quả mít đã chín, thơm càng nồng chứng tỏ qủa càng chín ",
            "Mùi lạ (hắc) chứng tỏ quả đã bị ngâm hóa chất độc hại, không mùi chứng tỏ qủa chưa chín đã hái như thế thì quả sẽ rất nhạt ăn không ngon, cả hai trường hợp này ta đều không nên chọn những quả như vậy",
        ],
        isLeave: false,
        node0: {
            //Hình dạng
            name: "Hình dạng",
            results: ["Tròn đều", "Có vết lõm, dị dạng"],
            descriptions: [
                "Quả tròn đều thì sẽ có nhiều múi. Múi đều không bị khuyết múi",
                "Quả méo mó, dị dạng, có vết lõm vào thì múi sẽ không đều, bị khuyết múi tại những điểm lõm vào hoặc méo",
            ],
            images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQullHLqWyRB2xpN321dzdaGo46amiSpKmgcWfKI7_gZOpWSV082gxmPFYGyoYWd4f6Ax4&usqp=CAU",
                "https://danviet.mediacdn.vn/thumb_w/650/2021/3/29/gia-mit-thai-hom-nay-16169918855271901665549.jpg",
            ],
            isLeave: false,
            node0: {
                //Kích thước gai
                name: "Kích thước gai",
                results: ["To, đều và thưa", "Nhỏ và Mau"],
                descriptions: [
                    "Gai mít to đều thưa thì múi mít bên trong sẽ to, được nhiều múi, ít sơ",
                    "Múi mít bên trong nhỏ, quả sẽ nhiều sơ hơn",
                ],
                images: [
                    "https://kutop1.com/wp-content/uploads/2020/03/qua-mit.png",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhytL22ctbhu6K2et3TogXFPSpv5Pa3RMBYNNU_j3wyjVAv1WXmbQqFfnjW_ra--V0Gz8&usqp=CAU",
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
            //Tình trạng tồi
            isLeave: true,
            value: "bad",
        },
        node2: {
            //Tình trạng tổi
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

export default jackfruitTree;