import {
    MdFace,
    MdOutlineSpa,
    MdLocalFlorist,
    MdOutlineBrush,
    MdOutlineLocalDrink,
    MdStyle
} from 'react-icons/md';
import { GiPerfumeBottle } from 'react-icons/gi';
import { FaRegSmileBeam } from 'react-icons/fa';
import { IoMdColorPalette } from 'react-icons/io';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Container from '../container';
import CategoryBox from '../categoryBox';
import { LuScissors } from 'react-icons/lu';
import { FaRegHand } from 'react-icons/fa6';
import { TbMassage } from 'react-icons/tb';

export const categories = [
    {
        label: 'Haircuts',
        icon: LuScissors,
        description: 'Stylish cuts and trims for all hair types.'
    },
    {
        label: 'Facials',
        icon: MdFace,
        description: 'Refreshing facial treatments for glowing skin.'
    },
    {
        label: 'Nails',
        icon: FaRegHand, // Creatively using a different icon that could suggest detail and beauty
        description: 'Manicures and pedicures for beautiful hands and feet.'
    },
    {
        label: 'Massages',
        icon: TbMassage, // Using an icon that might suggest relaxation
        description: 'Relaxing massages to alleviate stress and tension.'
    },
    {
        label: 'Makeup',
        icon: MdOutlineBrush,
        description: 'Professional makeup services for all occasions.'
    },
    {
        label: 'Spa',
        icon: MdOutlineSpa,
        description: 'Full body treatments for ultimate relaxation.'
    },
];

const Categories = () => {
    return (
        <Container>
            <div
                className="
              pt-4
              flex 
              flex-row 
              items-center 
              justify-between
              overflow-x-auto
            "
            >
                {categories.map((item) => (
                    <CategoryBox
                        key={item.label}
                        label={item.label}
                        icon={item.icon}
                    // selected={category === item.label}
                    />
                ))}
            </div>
        </Container>
    );
}

export default Categories;