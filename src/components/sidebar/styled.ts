import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonProps, IconOptionProps, NavItemProps } from "./types";

export const SidebarContainer = styled.div`
  width: 250px;
  background-color: ${({ theme }) => theme.colors.sidebar};
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: sticky;
  top: 0;
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