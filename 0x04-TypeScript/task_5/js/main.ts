// main.ts

// Interface for major credits
interface MajorCredits {
    credits: number;
    brand: 'MajorCredits';
}

// Interface for minor credits
interface MinorCredits {
    credits: number;
    brand: 'MinorCredits';
}

// Function to sum major credits
const sumMajorCredits = (subject1: MajorCredits, subject2: MajorCredits): MajorCredits => {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'MajorCredits'
    };
}

// Function to sum minor credits
const sumMinorrCredits = (subject1: MinorCredits, subject2: MinorCredits): MinorCredits => {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'MinorCredits'
    };
}
