import Card from "./index";

export default {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Default = {
  args: {
    children: (
      <div>
        <h3 className="text-h6 mb-2">Card Title</h3>
        <p className="text-body-2 text-t-secondary">
          This is a sample card content. Cards are used to display information
          in a structured way.
        </p>
      </div>
    ),
  },
};

export const WithPadding = {
  args: {
    children: (
      <div>
        <h3 className="text-h6 mb-2">Card with Custom Padding</h3>
        <p className="text-body-2 text-t-secondary">
          This card has custom padding applied.
        </p>
      </div>
    ),
    className: "p-6",
  },
};

export const LargeCard = {
  args: {
    children: (
      <div>
        <h2 className="text-h4 mb-4">Large Card</h2>
        <p className="text-body-1 text-t-secondary mb-4">
          This is a larger card with more content. It demonstrates how cards can
          be used for different types of content layouts.
        </p>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-primary-01 text-white rounded">
            Action
          </button>
          <button className="px-4 py-2 border border-s-stroke2 rounded">
            Cancel
          </button>
        </div>
      </div>
    ),
    className: "max-w-md",
  },
};
