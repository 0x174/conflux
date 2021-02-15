const config = {
    elements: [
        // Resource Declaration
        {
            data: {
                id: "Knife",
                type: 'tool',
            },
            position: {x: 100, y: 50},
            group: "nodes"
        },
        {
            data: {
                id: "Peanut Butter",
                type: 'resource',
                color: 'brown'
            },
            position: {x: 100, y: 100},
            group: "nodes"
        },
        {
            data: {
                id: "Bread Slice (Bottom)",
                type: 'resource',
            },
            position: {x: 100, y: 150},
            group: "nodes"
        },
        {
            data: {
                id: "Jelly",
                type: 'resource',
            },
            position: {x: 100, y: 200},
            group: "nodes"
        },

        {
            data: {
                id: "Bread Slice (Top)",
                type: 'resource',
            },
            position: {x: 100, y: 250},
            group: "nodes"
        },
        // Node Actions
        {
            data: {
                id: "Open Peanut Butter Jar",
                type: 'action',
            },
            position: {x: 250, y: 100},
            group: "nodes"
        },
        {
            data: {
                id: "Insert Knife into Peanut Butter Jar, Scooping Upwards",
                type: 'action',
            },
            position: {x: 550, y: 100},
            group: "nodes"
        },
        {
            data: {
                id: "Apply Peanut Butter to Bread Slice (Bottom)",
                type: 'action',
            },
            position: {x: 750, y: 150},
            group: "nodes"
        },
        {
            data: {
                id: "Open Jelly Squeeze Bottle",
                type: 'action',
            },
            position: {x: 250, y: 200},
            group: "nodes"
        },
        {
            data: {
                id: "Apply Jelly to Bread Slice (Bottom)",
                type: 'action',
            },
            position: {x: 900, y: 200},
            group: "nodes"
        },
        {
            data: {
                id: "Place Bread Slice (Top) on top of Bread Slice (Bottom)",
                type: 'action',
            },
            position: {x: 950, y: 250},
            group: "nodes"
        },


        // Action Edges
        {
            data: { id: "peanut-butter-open", source: "Peanut Butter", target: "Open Peanut Butter Jar" },
            group: "edges"
        },
        {
            data: { id: "peanut-butter-scoop", source: "Open Peanut Butter Jar", target: "Insert Knife into Peanut Butter Jar, Scooping Upwards" },
            group: "edges"
        },
        {
            data: { id: "knife-scoop", source: "Knife", target: "Insert Knife into Peanut Butter Jar, Scooping Upwards" },
            group: "edges"
        },
        {
            data: {
                id: "knife-apply-peanut-butter",
                source: "Insert Knife into Peanut Butter Jar, Scooping Upwards",
                target: "Apply Peanut Butter to Bread Slice (Bottom)" },
            group: "edges"
        },
        {
            data: {
                id: "knife-apply-peanut-butter-to-bread",
                source: "Bread Slice (Bottom)",
                target: "Apply Peanut Butter to Bread Slice (Bottom)" },
            group: "edges"
        },
        {
            data: {
                id: "open-jelly",
                source: "Jelly",
                target: "Open Jelly Squeeze Bottle" },
            group: "edges"
        },
        {
            data: {
                id: "apply-jelly",
                source: "Open Jelly Squeeze Bottle",
                target: "Apply Jelly to Bread Slice (Bottom)" },
            group: "edges"
        },
        {
            data: {
                id: "mix-peanut-butter-and-jelly",
                source: "Apply Peanut Butter to Bread Slice (Bottom)",
                target: "Apply Jelly to Bread Slice (Bottom)" },
            group: "edges"
        },
        {
            data: {
                id: "assemble-sandwich",
                source: "Apply Jelly to Bread Slice (Bottom)",
                target: "Place Bread Slice (Top) on top of Bread Slice (Bottom)"
            },
            group: "edges"
        },
        {
            data: {
                id: "apply-top-bread-slice",
                source: "Bread Slice (Top)",
                target: "Place Bread Slice (Top) on top of Bread Slice (Bottom)"
            },
            group: "edges"
        },


    ],
    style: [
        {
            selector: "node",
            style: {"background-color": "#666", label: "data(id)"}
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

export default config;
