import basketImage from "../assets/images/basket.png";
import washingMachineImage from "../assets/images/washing-machine.png";
import deliveryImage from "../assets/images/delivery.png";
import curtainImage from "../assets/images/curtain.png";
import DryCleaningImage from "../assets/images/dry-cleaning.png";
import LeatherJacketsImage from "../assets/images/leather-jackets.png";

const processSteps = [
	{
		src: basketImage,
		title: "We Collect",
		description:
			"We use premium materials, technologies and guarantee treatment with care.",
		delay: 0,
	},
	{
		src: washingMachineImage,
		title: "We Clean",
		description:
			"We use premium materials, technologies and guarantee treatment with care.",
		delay: 100,
	},
	{
		src: deliveryImage,
		title: "We Deliver",
		description:
			"Free delivery for every order upon prior request within 24 hours after cleaning.",
		delay: 200,
	},
];

const workDetails = [
	{
		src: DryCleaningImage,
		title: "Dry Cleaning",
		description:
			"Oil stains are may not be entirely possible to remove by water.  Synthetic fibers respond well to only dry cleaning.",
		delay: 0,
	},
	{
		src: curtainImage,
		title: "Curtains Cleaning",
		description:
			"The curtains come in different materials such as pure cotton lining, linen & cotton blend drapes in superior color, fabric, and texture.",
		delay: 100,
	},
	{
		src: LeatherJacketsImage,
		title: "Leather & Suede",
		description:
			"The curtains come in different materials such as pure cotton lining, linen & cotton blend drapes in superior color, fabric, and texture.",
		delay: 200,
	},
];

export { processSteps, workDetails };
