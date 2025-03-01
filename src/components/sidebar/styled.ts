import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { ButtonProps, IconOptionProps, MobileMenuProps, NavItemProps, SidebarContainerProps } from "./types";
import { mediaDown } from "../../styles/responsive";

export const SidebarContainer = styled.div<SidebarContainerProps>`
  width: 250px;
  background-color: ${({ theme }) => theme.colors.sidebar};
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: sticky;
  top: 0;
  transition: transform ${({ theme }) => theme.transitions.normal};
  z-index: ${({ theme }) => theme.zIndices.overlay};
  
  ${({ theme }) => mediaDown.md(theme)} {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    box-shadow: ${({ isOpen, theme }) => isOpen ? theme.shadows.lg : 'none'};
  }
`;

export const MobileMenuToggle = styled.button<MobileMenuProps>`
  display: none;
  position: fixed;
  top: ${({ theme }) => theme.spacing.md};
  left: ${({ isOpen, theme }) => isOpen ? '270px' : theme.spacing.md};
  z-index: ${({ theme }) => theme.zIndices.modal};
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  width: 44px;
  height: 44px;
  justify-content: center;
  align-items: center;
  transition: all ${({ theme }) => theme.transitions.normal};
  box-shadow: ${({ theme }) => theme.shadows.md};
  
  ${({ theme }) => mediaDown.md(theme)} {
    display: flex;
  }
`;

export const MobileOverlay = styled.div<MobileMenuProps>`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: ${({ theme }) => theme.zIndices.overlay - 1};
  opacity: ${({ isOpen }) => isOpen ? 1 : 0};
  visibility: ${({ isOpen }) => isOpen ? 'visible' : 'hidden'};
  transition: opacity ${({ theme }) => theme.transitions.normal},
              visibility ${({ theme }) => theme.transitions.normal};
  
  ${({ theme }) => mediaDown.md(theme)} {
    display: block;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  
  svg {
    margin-right: ${({ theme }) => theme.spacing.sm};
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const SectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textLight};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;


export const NavItem = styled.div<NavItemProps>`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ isActive, theme }) => 
    isActive ? `${theme.colors.primary}10` : 'transparent'};
  
  a {
    color: ${({ isActive, theme }) => 
      isActive ? theme.colors.primary : theme.colors.text};
    font-weight: ${({ isActive }) => (isActive ? '600' : '400')};
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background-color: ${({ theme }) => `${theme.colors.primary}10`};
  }
  
  svg {
    margin-right: ${({ theme }) => theme.spacing.md};
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

export const AddBinderButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textLight};
  padding: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background-color: ${({ theme }) => `${theme.colors.primary}10`};
    color: ${({ theme }) => theme.colors.primary};
  }
  
  svg {
    margin-right: ${({ theme }) => theme.spacing.md};
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

export const NewBinderForm = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const Input = styled.input`
  padding: ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const IconSelector = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  flex-wrap: wrap;
`;


export const IconOption = styled.div<IconOptionProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ isSelected, theme }) => 
    isSelected ? theme.colors.primary : theme.colors.background};
  color: ${({ isSelected, theme }) => 
    isSelected ? theme.colors.card : theme.colors.text};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  border: 1px solid ${({ isSelected, theme }) => 
    isSelected ? theme.colors.primary : theme.colors.border};
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const Button = styled.button<ButtonProps>`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ primary, theme }) => 
    primary ? theme.colors.primary : theme.colors.border};
  background-color: ${({ primary, theme }) => 
    primary ? theme.colors.primary : 'transparent'};
  color: ${({ primary, theme }) => 
    primary ? theme.colors.card : theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  flex: 1;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background-color: ${({ primary, theme }) => 
      primary ? theme.colors.secondary : theme.colors.background};
  }
`;
