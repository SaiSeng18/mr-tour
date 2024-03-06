tailwind.config = {
	theme: {
		extend: {
			colors: {
				primary: "var(--primary)",
				"white-custom": "var(--white-custom)",
				"color-1": "var(--color-1)",
				"color-2": "var(--color-2)",
				"color-3": "var(--color-3)",
				"black-custom": "var(--black-custom)",
			},
			fontFamily: {
				vietnam: "var(--be-vietnam)",
			},
		},
		screens: {
			"2xl": { max: "1535px" },
			// => @media (max-width: 1535px) { ... }

			xl: { max: "1279px" },
			// => @media (max-width: 1279px) { ... }

			lg: { max: "1023px" },
			// => @media (max-width: 1023px) { ... }

			md: { max: "767px" },
			// => @media (max-width: 767px) { ... }

			sm: { max: "639px" },
			// => @media (max-width: 639px) { ... }
		},
	},
};
