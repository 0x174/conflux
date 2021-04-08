const config = {
    elements: [
        {
            data: {
                id: "Thermocycler",
                type: 'Tool',
            },
            position: {x: 100, y: 50},
            group: "nodes",
        },

    ],
    style: [
        {
            selector: "node",
            style: {
                "background-color": "#666",
                label: "data(id)",
                'width': 35,
                'length': 45,
            }
        },
        {
            selector: "node.tool",
            style: {
                "background-color": "#000",
                label: "data(id)",
                'width': 35,
                'length': 45,
            }
        },

        {
            selector: "edges",
            style: {
                width: 3,
                "line-color": "#ccc",
                "target-arrow-color": "#ccc",
                "target-arrow-shape": "triangle"
            }
        }
    ],
    layout: {name: "grid", rows: 1}
}

const NODE_LABELS = {
    Tool: ["green"],
    LiquidHandling: ["#00ffd9"],
    Motion: ["white"],
    Thermal: ["red"],
};

for (let [key, value] of Object.entries(NODE_LABELS)) {
    console.log(key);
    let nodeStyle = {
        selector: `node[type = "${key}"]`,
        style: {
            "background-color": value[0],
        },
    };
    config.style.push(nodeStyle);
}
export default config;
