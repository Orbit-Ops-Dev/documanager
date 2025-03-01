// src/components/layout/Sidebar.tsx
import { useState, useEffect } from 'react';
import {  NavLink, useLocation } from 'react-router-dom';
import { 
  FiHome, 
  FiUsers, 
  FiBriefcase, 
  FiDollarSign, 
  FiFileText,
  FiFolder,
  FiPlusCircle,
  FiMenu,
  FiX
} from 'react-icons/fi';
import { SidebarProps } from './types';
import { AddBinderButton, Button, ButtonGroup, IconOption, IconSelector, Input, Logo, MobileMenuToggle, MobileOverlay, Navigation, NavItem, NewBinderForm, SectionTitle, SidebarContainer } from './styled';


const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'users':
      return <FiUsers />;
    case 'briefcase':
      return <FiBriefcase />;
    case 'dollar-sign':
      return <FiDollarSign />;
    case 'file-text':
      return <FiFileText />;
    default:
      return <FiFolder />;
  }
};

const Sidebar: React.FC<SidebarProps> = ({ binders, addBinder }) => {
  const location = useLocation();
  const [showNewBinderForm, setShowNewBinderForm] = useState(false);
  const [newBinderName, setNewBinderName] = useState('');
  const [selectedIcon, setSelectedIcon] = useState('folder');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleAddBinder = () => {
    if (newBinderName.trim()) {
      addBinder(newBinderName.trim(), selectedIcon);
      setNewBinderName('');
      setSelectedIcon('folder');
      setShowNewBinderForm(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const iconOptions = [
    { name: 'folder', component: <FiFolder /> },
    { name: 'users', component: <FiUsers /> },
    { name: 'briefcase', component: <FiBriefcase /> },
    { name: 'dollar-sign', component: <FiDollarSign /> },
    { name: 'file-text', component: <FiFileText /> },
  ];

  return (
    <>
      <MobileMenuToggle isOpen={isMobileMenuOpen} onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FiX /> : <FiMenu />}
      </MobileMenuToggle>
      
      <MobileOverlay isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(false)} />
      
      <SidebarContainer isOpen={isMobileMenuOpen}>
        <Logo>
          <FiFileText />
          <span>DocManager</span>
        </Logo>
        
        <Navigation>
          <NavItem isActive={location.pathname === '/'}>
            <NavLink to="/">
              <FiHome />
              <span>Dashboard</span>
            </NavLink>
          </NavItem>
          
          <SectionTitle>Binders</SectionTitle>
          
          {binders.map(binder => (
            <NavItem key={binder.id} isActive={location.pathname === `/binder/${binder.id}`}>
              <NavLink to={`/binder/${binder.id}`}>
                {getIconComponent(binder.icon)}
                <span>{binder.name}</span>
              </NavLink>
            </NavItem>
          ))}
          
          {!showNewBinderForm ? (
            <AddBinderButton onClick={() => setShowNewBinderForm(true)}>
              <FiPlusCircle />
              <span>Add Binder</span>
            </AddBinderButton>
          ) : (
            <NewBinderForm>
              <Input
                type="text"
                placeholder="Binder name"
                value={newBinderName}
                onChange={(e) => setNewBinderName(e.target.value)}
              />
              <IconSelector>
                {iconOptions.map(icon => (
                  <IconOption 
                    key={icon.name}
                    isSelected={selectedIcon === icon.name}
                    onClick={() => setSelectedIcon(icon.name)}
                  >
                    {icon.component}
                  </IconOption>
                ))}
              </IconSelector>
              <ButtonGroup>
                <Button primary onClick={handleAddBinder}>Add</Button>
                <Button onClick={() => setShowNewBinderForm(false)}>Cancel</Button>
              </ButtonGroup>
            </NewBinderForm>
          )}
        </Navigation>
      </SidebarContainer>
    </>
  );
};


export default Sidebar;
