import React, { useState } from 'react'
import { styled, Stack, Text as TamaguiText, GetProps } from '@tamagui/core'
import { YStack, XStack } from '@tamagui/stacks'
import { tokens } from '../../tokens'
import { InputSingle } from '../InputSingle'
import { InputTextarea } from '../InputTextarea'

// ================================================================================
// TIPOS
// ================================================================================

export type InputFieldType = 'single' | 'textarea'

export interface InputFieldProps extends Omit<GetProps<typeof InputFieldContainer>, 'type'> {
  /** Label do campo (obrigatório) */
  label: string
  
  /** Se o campo é opcional */
  optional?: boolean
  
  /** Texto customizado para tag opcional (padrão: "Opcional") */
  optionalText?: string
  
  /** Mensagem de ajuda ou erro */
  notification?: string
  
  /** Tipo de input */
  type?: InputFieldType
  
  /** Valor do input */
  value?: string
  
  /** Callback quando o valor muda */
  onChangeText?: (text: string) => void
  
  /** Placeholder do input */
  placeholder?: string
  
  /** Mostrar contador de caracteres */
  showCounter?: boolean
  
  /** Limite máximo de caracteres */
  maxLength?: number
  
  /** Estado de erro */
  error?: boolean
  
  /** Estado desabilitado */
  disabled?: boolean
  
  /** Label de acessibilidade */
  accessibilityLabel?: string
  
  /** Hint de acessibilidade */
  accessibilityHint?: string
  
  /** ID para testes */
  testID?: string
}

// ================================================================================
// STYLED COMPONENTS
// ================================================================================

/**
 * Container principal do InputField
 */
const InputFieldContainer = styled(YStack, {
  name: 'InputFieldContainer',
  gap: tokens.inputField.size.medium.gap,
  width: '100%',
})

/**
 * Container do cabeçalho (Label + Optional)
 */
const HeadingContainer = styled(XStack, {
  name: 'InputFieldHeading',
  gap: tokens.inputField.size.medium.headingGap,
  justifyContent: 'space-between',
  alignItems: 'center',
})

/**
 * Label do campo
 */
const LabelText = styled(TamaguiText, {
  name: 'InputFieldLabel',
  fontFamily: tokens.typography.fontFamily.body,
  fontSize: tokens.inputField.size.medium.labelFontSize,
  lineHeight: tokens.inputField.size.medium.labelLineHeight,
  fontWeight: tokens.inputField.size.medium.labelFontWeight,
  letterSpacing: tokens.typography.letterSpacing.regular,
  flex: 1,
})

/**
 * Tag "Opcional"
 */
const OptionalTag = styled(TamaguiText, {
  name: 'InputFieldOptional',
  fontFamily: tokens.typography.fontFamily.body,
  fontSize: tokens.inputField.size.medium.optionalFontSize,
  lineHeight: tokens.inputField.size.medium.optionalLineHeight,
  fontWeight: tokens.inputField.size.medium.optionalFontWeight,
  letterSpacing: tokens.typography.letterSpacing.regular,
})

/**
 * Container do rodapé (Notification + Counter)
 */
const FooterContainer = styled(XStack, {
  name: 'InputFieldFooter',
  gap: tokens.inputField.size.medium.footerGap,
  justifyContent: 'space-between',
  alignItems: 'flex-start',
})

/**
 * Mensagem de notificação
 */
const NotificationText = styled(TamaguiText, {
  name: 'InputFieldNotification',
  fontFamily: tokens.typography.fontFamily.body,
  fontSize: tokens.inputField.size.medium.notificationFontSize,
  lineHeight: tokens.inputField.size.medium.notificationLineHeight,
  fontWeight: tokens.inputField.size.medium.notificationFontWeight,
  letterSpacing: tokens.typography.letterSpacing.regular,
  flex: 1,
})

/**
 * Contador de caracteres
 */
const CounterText = styled(TamaguiText, {
  name: 'InputFieldCounter',
  fontFamily: tokens.typography.fontFamily.body,
  fontSize: tokens.inputField.size.medium.counterFontSize,
  lineHeight: tokens.inputField.size.medium.counterLineHeight,
  fontWeight: tokens.inputField.size.medium.counterFontWeight,
  letterSpacing: tokens.typography.letterSpacing.regular,
})

// ================================================================================
// COMPOSIÇÃO
// ================================================================================
// InputField NÃO reimplementa inputs - ele compõe InputSingle e InputTextarea

// ================================================================================
// COMPONENTE PRINCIPAL
// ================================================================================

/**
 * InputField - Componente de campo de formulário completo
 * 
 * Wrapper que adiciona label, tag opcional, notificação e contador aos inputs.
 * Este é um componente de composição que não implementa lógica de input,
 * apenas adiciona metadados visuais.
 * 
 * @example
 * Uso básico com input de linha única:
 * ```tsx
 * <InputField
 *   label="Nome"
 *   value={name}
 *   onChangeText={setName}
 *   placeholder="Digite seu nome"
 * />
 * ```
 * 
 * @example
 * Campo opcional com notificação:
 * ```tsx
 * <InputField
 *   label="Observações"
 *   optional
 *   notification="Campo opcional para comentários adicionais"
 *   value={notes}
 *   onChangeText={setNotes}
 * />
 * ```
 * 
 * @example
 * Textarea com contador e limite:
 * ```tsx
 * <InputField
 *   label="Mensagem"
 *   type="textarea"
 *   showCounter
 *   maxLength={150}
 *   value={message}
 *   onChangeText={setMessage}
 * />
 * ```
 * 
 * @example
 * Campo com erro:
 * ```tsx
 * <InputField
 *   label="Email"
 *   error
 *   notification="Email inválido"
 *   value={email}
 *   onChangeText={setEmail}
 * />
 * ```
 */
export const InputField = React.forwardRef<any, InputFieldProps>(
  (
    {
      label,
      optional = false,
      optionalText = 'Opcional',
      notification,
      type = 'single',
      value = '',
      onChangeText,
      placeholder,
      showCounter = false,
      maxLength,
      error = false,
      disabled = false,
      accessibilityLabel,
      accessibilityHint,
      testID,
      ...props
    },
    ref
  ) => {
    // Estado interno para gerenciar o valor se não for controlado
    const [internalValue, setInternalValue] = useState(value)
    const currentValue = value !== undefined ? value : internalValue
    
    // Determinar o estado atual para cores
    const currentState = error ? 'error' : disabled ? 'disabled' : 'normal'
    const stateColors = tokens.inputField.state[currentState]
    
    // Handler de mudança
    const handleChangeText = (text: string) => {
      // Respeitar maxLength se definido
      const finalText = maxLength ? text.slice(0, maxLength) : text
      
      setInternalValue(finalText)
      onChangeText?.(finalText)
    }
    
    // Renderizar o input apropriado (composição real)
    const renderInput = () => {
      const commonProps = {
        value: currentValue,
        onChangeText: handleChangeText,
        placeholder,
        disabled,
        error,  // InputSingle e InputTextarea usam 'error', não 'hasError'
        size: 'medium' as const,  // InputField sempre usa size medium
        accessibilityLabel: accessibilityLabel || label,
        accessibilityHint: accessibilityHint || notification,
        testID: testID ? `${testID}-input` : undefined,
      }
      
      if (type === 'textarea') {
        return (
          <InputTextarea
            {...commonProps}
          />
        )
      }
      
      return <InputSingle {...commonProps} />
    }
    
    // Mostrar footer apenas se houver notification ou counter
    const showFooter = notification || showCounter
    
    return (
      <InputFieldContainer
        ref={ref}
        testID={testID}
        {...props}
      >
        {/* HEADING: Label + Optional Tag */}
        <HeadingContainer>
          <LabelText color={stateColors.labelColor}>
            {label}
          </LabelText>
          
          {optional && (
            <OptionalTag color={stateColors.optionalColor}>
              {optionalText}
            </OptionalTag>
          )}
        </HeadingContainer>
        
        {/* INPUT: Single ou Textarea */}
        {renderInput()}
        
        {/* FOOTER: Notification + Counter */}
        {showFooter && (
          <FooterContainer>
            {notification && (
              <NotificationText color={stateColors.notificationColor}>
                {notification}
              </NotificationText>
            )}
            
            {showCounter && maxLength && (
              <CounterText color={stateColors.counterColor}>
                {currentValue.length}/{maxLength}
              </CounterText>
            )}
          </FooterContainer>
        )}
      </InputFieldContainer>
    )
  }
)

InputField.displayName = 'InputField'

