import { Moon, Sun } from 'lucide-react';

import { useTheme } from '@/pages/provider/Theme';
import { Button } from './button';
import { DropdownMenu, DropdownMenuTrigger } from './dropdown-menu';
import {
  DropdownMenuContent,
  DropdownMenuItem,
} from '@radix-ui/react-dropdown-menu';

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="min-w-[90px] bg-white px-4 py-2 dark:bg-secondary"
        align="center"
      >
        <DropdownMenuItem
          className="my-1 w-full cursor-pointer hover:font-semibold hover:text-foreground"
          onClick={() => setTheme('light')}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          className="my-1 w-full cursor-pointer hover:font-semibold hover:text-foreground"
          onClick={() => setTheme('dark')}
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          className="my-1 w-full cursor-pointer hover:font-semibold hover:text-foreground"
          onClick={() => setTheme('system')}
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
