# @cot/admin-portal

A comprehensive React component library built with Vite, featuring modern admin dashboard components with TypeScript support and Storybook documentation.

## Features

- 🚀 Built with Vite for fast development and building
- 📦 TypeScript support with full type definitions
- 📚 Comprehensive Storybook documentation
- 🎨 Beautiful UI components for admin dashboards
- ⚡ Tree-shakeable ES modules
- 🌙 Light/Dark theme support
- 📱 Responsive design
- ♿ Accessibility focused

## Installation

```bash
npm install @cot/admin-portal
# or
yarn add @cot/admin-portal
```

## Usage

### Basic Import

```tsx
import { Button, Card, Modal } from "@cot/admin-portal";
import "@cot/admin-portal/style.css";

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Card title="Example Card">
        <p>Card content here</p>
      </Card>
    </div>
  );
}
```

### With Theme Provider

```tsx
import { ThemeProvider, Button } from "@cot/admin-portal";
import "@cot/admin-portal/style.css";

function App() {
  return (
    <ThemeProvider>
      <Button>Themed Button</Button>
    </ThemeProvider>
  );
}
```

## Available Components

- **Button** - Various button styles and sizes
- **Card** - Flexible card component
- **Modal** - Modal dialogs
- **Table** - Data tables with sorting
- **Sidebar** - Navigation sidebar
- **Search** - Search input with filters
- **Icon** - Icon component with many variants
- **Tooltip** - Interactive tooltips
- **Spinner** - Loading indicators
- **Switch** - Toggle switches
- **Checkbox** - Custom checkboxes
- **DateAndTime** - Date/time pickers
- **Editor** - Rich text editor
- **Dropdown** - Dropdown menus
- **Field** - Form field components
- **Header** - Page headers
- **Layout** - Layout components
- **Login** - Authentication forms
- **Message** - Message/notification components
- **Navigation** - Navigation components
- **Product** - E-commerce product components
- **Range** - Range sliders
- **Select** - Custom select dropdowns
- **Tabs** - Tab navigation
- And many more...

## Development

### Prerequisites

- Node.js 18+
- Yarn or npm

### Setup

```bash
git clone <repository-url>
cd admin-portal
yarn install
```

### Development Commands

```bash
# Start development server
yarn dev

# Build library
yarn build:lib

# Start Storybook
yarn storybook

# Build Storybook
yarn build-storybook

# Lint code
yarn lint
```

## Storybook Documentation

View all components and their documentation in Storybook:

```bash
yarn storybook
```

This will start Storybook at `http://localhost:6006` where you can browse all components, see usage examples, and interact with component props.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, please open an issue on GitHub or contact the maintainers.
