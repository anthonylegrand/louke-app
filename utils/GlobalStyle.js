const COLORS = {
    "main-color": "#EB2929",
    "secondary-color": "#FDECEA",
    "title-text-color": "#555555",
    "main-text-color": "#000000",
    "secondary-text-color": "#999999",
    "background-color": "#fff"
}

const STYLES = {
    logo: {
        width: 200, height: 64
    },
    page_title: {
        color: COLORS['title-text-color'],
        fontWeight: 'bold',
        fontSize: 17
    },
    main_text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS["main-text-color"]
    },
    secondary_text: {
        fontSize: 15,
        lineHeight: 20,
        color: COLORS["secondary-text-color"]
    },
    button: {
        backgroundColor: COLORS['background-color'],
        justifyContent: 'center', 
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 20,
        paddingVertical: 20,
        marginVertical: 5,

        shadowColor: COLORS['main-text-color'],
        shadowRadius: 15,
        elevation: 8
    },
    buttonText: {
      textTransform: 'uppercase',
      fontWeight: 'bold'
    },
    shadow: {
        shadowColor: COLORS['main-text-color'],
        shadowRadius: 15,
        elevation: 8
    }
}

module.exports = { COLORS, STYLES }