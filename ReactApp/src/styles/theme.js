import { extendTheme } from "@chakra-ui/react";
const breakpoints = {
	sm: "30em",
	md: "48em",
	lg: "62em",
	xl: "80em",
	"2xl": "96em",
};

//

const activeLabelStyles = {
	transform: "scale(0.85) translateY(-24px)",
};

export const mainTheme = extendTheme({
  breakpoints,
  colors: {
    yellow: {
      100: "#FFCB30",
      200: "#FFBF00",
      300: "#FF9900",
      400: "#FFE600",
      500: "#FFFDF1",
      600: "#B18037",
    },
    green: {
      100: "#2CAA6E",
      200: "#56D02B",
      300: "#8AEE67",
      400: "#6CB45B",
      500: "#F1FFF4",
      600: "#37B177",
    },
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "7vw",
  },
  components: {
    Button: {
      variants: {
        auth: {
          px: "8",
          textShadow: "0px 1px 1px rgba(0, 0, 0, 0.25)",
          fontFamily: "neuton",
          fontWeight: "normal",
          bgGradient:
            "linear(to right top, rgba(0, 135, 147, 0.5), rgba(0, 191, 114, 0.5), rgba(168, 235, 18, 0.5))",
          _hover: {
            bgGradient:
              "linear(to right top, rgba(0, 135, 147, 1), rgba(0, 191, 114, 1), rgba(168, 235, 18, 1))",
            fontWeight: "300",
            textColor: "white",
            textShadow: "0px 4px 4px rgba(0,0,0,0.5)",
          },
        },
        homebutton: {
          color: "#1C6F47",
          textColor: "white",
          bgGradient:
            "linear(92.04deg, rgba(255, 191, 0, 0.2) 0%, rgba(29, 255, 214, 0.2) 100%, rgba(255, 255, 255, 0.2) 100%)",
          boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
          w: "70%",
          h: "10%",
          mt: "3.5vw",
          _hover: {
            bgGradient: "linear(to-r, yellow.100, green.100)",
            boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
          },
        },
        golden: {
          textAlign: "center",
          fontFamily: "neuton",
          fontWeight: "700",
          letterSpacing: "0.2em",
          color: "#B18037",
          textShadow: "0px 2px 2px rgba(0,0,0,0.25)",
          bgGradient:
            "linear(to right top, rgba(89, 34, 34, 0.5) 0%, rgba(146, 68, 41, 0.5) 25%,rgba(194, 114, 35, 0.5) 50%,rgba(225, 171, 11, 0.5) 75%,rgba(235, 234, 0, 0.5) 100%)",
          _hover: {
            bgGradient:
              "linear(to right top, #592222, #924429, #c27223, #e1ab0b, #ebea00)",
            textColor: "white",
            textShadow: "0px 2px 2px rgba(0,0,0,0.25)",
          },
        },
      },
    },
    Heading: {
      variants: {
        authEffect: {
          color: "#072C06",
          textShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
          fontFamily: "neuton",
          fontWeight: "light",
        },
        golden: {
          fontFamily: "neuton",
          fontWeight: "400",
          color: "#2C2806",
          textShadow: "0px 2px 2px rgba(0,0,0,0.25)",
          fontSize: "1.5vw",
          letterSpacing: "0.03em",
        },
      },
    },
    Text: {
      variants: {
        authEffect: {
          color: "#072C06",
          textShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
          fontFamily: "neuton",
          fontWeight: "light",
        },
        golden: {
          fontFamily: "neuton",
          fontWeight: "400",
          color: "#2C2806",
          textShadow: "0px 2px 2px rgba(0,0,0,0.25)",
          fontSize: "1.5vw",
          letterSpacing: "0.03em",
        },
      },
    },
    FormLabel: {
      variants: {
        authEffect: {
          color: "#072C06",
          textShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
          fontFamily: "neuton",
          fontWeight: "light",
        },
        golden: {
          fontFamily: "neuton",
          fontWeight: "400",
          color: "#2C2806",
          textShadow: "0px 2px 2px rgba(0,0,0,0.25)",
        },
      },
    },
    Form: {
      variants: {
        authEffect: {
          color: "#072C06",
          textShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
          fontFamily: "neuton",
          fontWeight: "light",
        },
        golden: {
          fontFamily: "neuton",
          fontWeight: "400",
          color: "#2C2806",
          textShadow: "0px 2px 2px rgba(0,0,0,0.25)",
        },
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label":
              {
                ...activeLabelStyles,
              },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "white",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top",
            },
          },
        },
      },
    },
  },
	breakpoints,
	colors: {
		yellow: {
			100: "#FFCB30",
			200: "#FFBF00",
			300: "#FF9900",
			400: "#FFE600",
			500: "#FFFDF1",
			600: "#B18037",
		},
		green: {
			100: "#2CAA6E",
			200: "#56D02B",
			300: "#8AEE67",
			400: "#6CB45B",
			500: "#F1FFF4",
			600: "#37B177",
		},
	},
	fontSizes: {
		xs: "0.75rem",
		sm: "0.875rem",
		md: "1rem",
		lg: "1.125rem",
		xl: "1.25rem",
		"2xl": "1.5rem",
		"3xl": "1.875rem",
		"4xl": "2.25rem",
		"5xl": "3rem",
		"6xl": "3.75rem",
		"7xl": "4.5rem",
		"8xl": "6rem",
		"9xl": "7vw",
	},
	components: {
		Button: {
			variants: {
				auth: {
					px: "8",
					textShadow: "0px 1px 1px rgba(0, 0, 0, 0.25)",
					fontFamily: "neuton",
					fontWeight: "normal",
					bgGradient:
						"linear(to right top, rgba(0, 135, 147, 0.5), rgba(0, 191, 114, 0.5), rgba(168, 235, 18, 0.5))",
					_hover: {
						bgGradient:
							"linear(to right top, rgba(0, 135, 147, 1), rgba(0, 191, 114, 1), rgba(168, 235, 18, 1))",
						fontWeight: "300",
						textColor: "white",
						textShadow: "0px 4px 4px rgba(0,0,0,0.5)",
					},
				},
				homebutton: {
					color: "#1C6F47",
					textColor: "white",
					bgGradient:
						"linear(92.04deg, rgba(255, 191, 0, 0.2) 0%, rgba(29, 255, 214, 0.2) 100%, rgba(255, 255, 255, 0.2) 100%)",
					boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
					w: "70%",
					h: "10%",
					mt: "3.5vw",
					_hover: {
						bgGradient: "linear(to-r, yellow.100, green.100)",
						boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
					},
				},
				golden: {
					textAlign: "center",
					fontFamily: "neuton",
					fontWeight: "700",
					letterSpacing: "0.2em",
					color: "#B18037",
					textShadow: "0px 2px 2px rgba(0,0,0,0.25)",
					bgGradient:
						"linear(to right top, rgba(89, 34, 34, 0.5) 0%, rgba(146, 68, 41, 0.5) 25%,rgba(194, 114, 35, 0.5) 50%,rgba(225, 171, 11, 0.5) 75%,rgba(235, 234, 0, 0.5) 100%)",
					_hover: {
						bgGradient:
							"linear(to right top, #592222, #924429, #c27223, #e1ab0b, #ebea00)",
						textColor: "white",
						textShadow: "0px 2px 2px rgba(0,0,0,0.25)",
					},
				},
			},
		},
		Heading: {
			variants: {
				authEffect: {
					color: "#072C06",
					textShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
					fontFamily: "neuton",
					fontWeight: "light",
				},
				golden: {
					fontFamily: "neuton",
					fontWeight: "400",
					color: "#2C2806",
					textShadow: "0px 2px 2px rgba(0,0,0,0.25)",
					fontSize: "1.5vw",
					letterSpacing: "0.03em",
				},
			},
		},
		P: {
			variants: {
				authEffect: {
					color: "#072C06",
					textShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
					fontFamily: "neuton",
					fontWeight: "light",
				},
				golden: {
					fontFamily: "neuton",
					fontWeight: "400",
					color: "#2C2806",
					textShadow: "0px 2px 2px rgba(0,0,0,0.25)",
					fontSize: "1.5vw",
					letterSpacing: "0.03em",
				},
			},
		},
		Form: {
			variants: {
				authEffect: {
					color: "#072C06",
					textShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
					fontFamily: "neuton",
					fontWeight: "light",
				},
				golden: {
					fontFamily: "neuton",
					fontWeight: "400",
					color: "#2C2806",
					textShadow: "0px 2px 2px rgba(0,0,0,0.25)",
				},
				floating: {
					container: {
						_focusWithin: {
							label: {
								...activeLabelStyles,
							},
						},
						"input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label":
							{
								...activeLabelStyles,
							},
						label: {
							top: 0,
							left: 0,
							zIndex: 2,
							position: "absolute",
							backgroundColor: "white",
							pointerEvents: "none",
							mx: 3,
							px: 1,
							my: 2,
							transformOrigin: "left top",
						},
					},
				},
			},
		},
	},
});
