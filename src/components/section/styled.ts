import styled from "styled-components";
import { ButtonProps } from "./types";
import { Link } from "react-router-dom";
import { mediaDown } from "../../styles/responsive";

export const SectionViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.textLight};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  
  svg {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

export const SectionTitle = styled.h1`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.xxxl};
  
  ${({ theme }) => mediaDown.md(theme)} {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }
  
  ${({ theme }) => mediaDown.sm(theme)} {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

export const SectionDetailsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  
  ${({ theme }) => mediaDown.sm(theme)} {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const DueDateCard = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.card};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.md};
    transform: translateY(-2px);
  }
`;

export const DueDateIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => `${theme.colors.primary}20`};
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;

export const DueDateInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DueDateLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const DueDateValue = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 600;
`;

export const RecurrenceCard = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.card};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.md};
    transform: translateY(-2px);
  }
`;

export const RecurrenceIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => `${theme.colors.primary}20`};
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;

export const RecurrenceInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RecurrenceLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const RecurrenceValue = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 600;
`;

export const UploadCard = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.card};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.md};
    transform: translateY(-2px);
  }
`;

export const UploadIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => `${theme.colors.success}20`};
  color: ${({ theme }) => theme.colors.success};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;

export const UploadInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UploadLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const UploadValue = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 600;
`;

export const DatePickerModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const DatePickerContent = styled.div`
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  width: 100%;
  max-width: 500px;
  box-shadow: ${({ theme }) => theme.shadows.xl};
  overflow: hidden;
`;

export const DatePickerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.lg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  
  h3 {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textLight};
  
  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const DatePickerBody = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const FormLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 600;
`;

export const FormInput = styled.input`
  padding: ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const FormSelect = styled.select`
  padding: ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const DatePickerFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ primary, theme }) => 
    primary ? theme.colors.primary : theme.colors.border};
  background-color: ${({ primary, theme }) => 
    primary ? theme.colors.primary : 'transparent'};
  color: ${({ primary, theme }) => 
    primary ? theme.colors.card : theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 500;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background-color: ${({ primary, theme }) => 
      primary ? theme.colors.secondary : theme.colors.background};
  }
  
  svg {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;

export const FilesSection = styled.div`
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  padding: ${({ theme }) => theme.spacing.lg};
`;

export const FilesSectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  h2 {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
  
  ${({ theme }) => mediaDown.sm(theme)} {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const UploadButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: 500;
  transition: background-color ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
  
  svg {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;

export const FilesTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  ${({ theme }) => mediaDown.md(theme)} {
    display: block;
    
    thead {
      display: none;
    }
    
    tbody {
      display: block;
    }
    
    tr {
      display: block;
      margin-bottom: ${({ theme }) => theme.spacing.md};
      background-color: ${({ theme }) => theme.colors.background};
      border-radius: ${({ theme }) => theme.borderRadius.md};
      padding: ${({ theme }) => theme.spacing.md};
    }
  }
`;

export const FilesTableHeader = styled.th`
  text-align: left;
  padding: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textLight};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const FilesTableRow = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
  }
  
  ${({ theme }) => mediaDown.md(theme)} {
    border-bottom: none;
    box-shadow: ${({ theme }) => theme.shadows.sm};
  }
`;

export const FilesTableCell = styled.td`
  padding: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  
  ${({ theme }) => mediaDown.md(theme)} {
    display: flex;
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    
    &:before {
      content: attr(data-label);
      font-weight: 600;
      width: 40%;
      margin-right: ${({ theme }) => theme.spacing.md};
      color: ${({ theme }) => theme.colors.textLight};
    }
    
    &:not(:last-child) {
      border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    }
  }
`;

export const FileNameCell = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  
  svg {
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

export const FileActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const FileActionButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textLight};
  font-size: ${({ theme }) => theme.fontSizes.md};
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.xs};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => `${theme.colors.primary}10`};
  }
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xxl};
  
  svg {
    font-size: ${({ theme }) => theme.fontSizes.xxxl};
    color: ${({ theme }) => theme.colors.textLight};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
  
  button {
    margin-top: ${({ theme }) => theme.spacing.lg};
  }
`;

export const EmptyStateText = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.textLight};
  text-align: center;
`;

export const LastOpenedInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.textLight};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  
  svg {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;

// Comments section styled components
export const CommentsSection = styled.div`
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  padding: ${({ theme }) => theme.spacing.lg};
  
  ${({ theme }) => mediaDown.sm(theme)} {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

export const CommentsSectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  h2 {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
  
  ${({ theme }) => mediaDown.sm(theme)} {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const CommentsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const CommentItem = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.lg};
  
  ${({ theme }) => mediaDown.sm(theme)} {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

export const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const CommentCategoryBadge = styled.div<{ category: string }>`
  background-color: ${({ theme, category }) => {
    switch (category) {
      case 'informative':
        return `${theme.colors.info}20`;
      case 'appearance':
        return `${theme.colors.primary}20`;
      case 'grammatical':
        return `${theme.colors.warning}20`;
      default:
        return `${theme.colors.accent}20`;
    }
  }};
  color: ${({ theme, category }) => {
    switch (category) {
      case 'informative':
        return theme.colors.info;
      case 'appearance':
        return theme.colors.primary;
      case 'grammatical':
        return theme.colors.warning;
      default:
        return theme.colors.accent;
    }
  }};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 600;
  text-transform: uppercase;
`;

export const CommentDate = styled.div`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const CommentText = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.5;
`;

export const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.lg};
  
  ${({ theme }) => mediaDown.sm(theme)} {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

export const CommentFormTitle = styled.h3`
  margin: 0 0 ${({ theme }) => theme.spacing.sm} 0;
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

export const CommentTextarea = styled.textarea`
  padding: ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-family: ${({ theme }) => theme.fonts.body};
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const CategorySelector = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  
  ${({ theme }) => mediaDown.sm(theme)} {
    flex-direction: column;
  }
`;

export const CategoryOption = styled.label<{ isSelected: boolean; category: string }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  background-color: ${({ theme, isSelected, category }) => {
    if (!isSelected) return theme.colors.card;
    
    switch (category) {
      case 'informative':
        return `${theme.colors.info}20`;
      case 'appearance':
        return `${theme.colors.primary}20`;
      case 'grammatical':
        return `${theme.colors.warning}20`;
      default:
        return `${theme.colors.accent}20`;
    }
  }};
  border: 1px solid ${({ theme, isSelected, category }) => {
    if (!isSelected) return theme.colors.border;
    
    switch (category) {
      case 'informative':
        return theme.colors.info;
      case 'appearance':
        return theme.colors.primary;
      case 'grammatical':
        return theme.colors.warning;
      default:
        return theme.colors.accent;
    }
  }};
  color: ${({ theme, isSelected, category }) => {
    if (!isSelected) return theme.colors.text;
    
    switch (category) {
      case 'informative':
        return theme.colors.info;
      case 'appearance':
        return theme.colors.primary;
      case 'grammatical':
        return theme.colors.warning;
      default:
        return theme.colors.accent;
    }
  }};
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background-color: ${({ theme, category, isSelected }) => {
      if (isSelected) return;
      
      switch (category) {
        case 'informative':
          return `${theme.colors.info}10`;
        case 'appearance':
          return `${theme.colors.primary}10`;
        case 'grammatical':
          return `${theme.colors.warning}10`;
        default:
          return `${theme.colors.accent}10`;
      }
    }};
  }
  
  input {
    display: none;
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: 500;
  transition: background-color ${({ theme }) => theme.transitions.fast};
  align-self: flex-end;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
  
  &:disabled {
    background-color: ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.textLight};
    cursor: not-allowed;
  }
  
  svg {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
  
  ${({ theme }) => mediaDown.sm(theme)} {
    align-self: stretch;
  }
`;
