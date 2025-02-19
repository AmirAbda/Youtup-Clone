import { SvgIconComponent } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SchoolIcon from '@mui/icons-material/School';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';

type Category = {
  name: string;
  icon: SvgIconComponent;
};

export const categories: Category[] = [
  { name: 'New', icon: HomeIcon },
  { name: 'JS Mastery', icon: CodeIcon },
  { name: 'Coding', icon: CodeIcon },
  { name: 'ReactJS', icon: CodeIcon },
  { name: 'NextJS', icon: CodeIcon },
  { name: 'Music', icon: MusicNoteIcon },
  { name: 'Education', icon: SchoolIcon },
  { name: 'Podcast', icon: GraphicEqIcon },
  { name: 'Movie', icon: OndemandVideoIcon },
  { name: 'Gaming', icon: SportsEsportsIcon },
  { name: 'Live', icon: LiveTvIcon },
  { name: 'Sport', icon: FitnessCenterIcon },
  { name: 'Fashion', icon: CheckroomIcon },
  { name: 'Beauty', icon: FaceRetouchingNaturalIcon },
  { name: 'Comedy', icon: TheaterComedyIcon },
  { name: 'Gym', icon: FitnessCenterIcon },
  { name: 'Crypto', icon: DeveloperModeIcon },
];