import basketImage from "../assets/images/basket.png";
import washingMachineImage from "../assets/images/washing-machine.png";
import deliveryImage from "../assets/images/delivery.png";

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
		delay: 200,
	},
	{
		src: deliveryImage,
		title: "We Deliver",
		description:
			"Free delivery for every order upon prior request within 24 hours after cleaning.",
		delay: 400,
	},
];

export { processSteps };
