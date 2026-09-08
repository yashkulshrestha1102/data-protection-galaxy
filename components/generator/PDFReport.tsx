// components/generator/PDFReport.tsx

import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

// Font register
Font.register({
  family: 'Helvetica',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/helvetica/v11/helvetica.ttf' }
  ]
});

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: '#ffffff',
    fontFamily: 'Helvetica',
  },
  header: {
    textAlign: 'center',
    borderBottom: 3,
    borderBottomColor: '#004d40',
    borderBottomStyle: 'solid',
    paddingBottom: 15,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#004d40',
    letterSpacing: 1,
  },
  headerSub: {
    fontSize: 14,
    color: '#6a8a7a',
    marginTop: 4,
  },
  section: {
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#004d40',
    borderBottom: 1,
    borderBottomColor: '#e0e8e4',
    borderBottomStyle: 'solid',
    paddingBottom: 4,
    marginBottom: 6,
  },
  scoreBox: {
    backgroundColor: '#f0f7f4',
    borderLeft: 4,
    borderLeftColor: '#004d40',
    borderLeftStyle: 'solid',
    padding: 15,
    marginVertical: 10,
    textAlign: 'center',
  },
  score: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#004d40',
  },
  scoreLabel: {
    fontSize: 14,
    color: '#2a4a3a',
  },
  maturity: {
    backgroundColor: '#8b0000',
    color: '#ffffff',
    padding: '4px 16px',
    borderRadius: 20,
    fontWeight: 'bold',
    fontSize: 12,
    marginTop: 6,
  },
  categoryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '4px 8px',
    backgroundColor: '#f8faf9',
    borderRadius: 4,
    fontSize: 9,
    marginBottom: 2,
  },
  riskItem: {
    padding: '4px 8px',
    borderLeft: 3,
    borderLeftColor: '#ef4444',
    borderLeftStyle: 'solid',
    marginBottom: 2,
    fontSize: 9,
  },
  gapBox: {
    padding: '4px 8px',
    borderRadius: 4,
    marginBottom: 2,
    fontSize: 9,
  },
  gapCritical: {
    backgroundColor: '#fef2f2',
    borderLeft: 4,
    borderLeftColor: '#ef4444',
    borderLeftStyle: 'solid',
  },
  gapMajor: {
    backgroundColor: '#fffbeb',
    borderLeft: 4,
    borderLeftColor: '#f59e0b',
    borderLeftStyle: 'solid',
  },
  gapMinor: {
    backgroundColor: '#f0fdf4',
    borderLeft: 4,
    borderLeftColor: '#2E8B57',
    borderLeftStyle: 'solid',
  },
  roadmapItem: {
    backgroundColor: '#f8faf9',
    padding: '4px 8px',
    borderRadius: 4,
    marginBottom: 2,
  },
  roadmapPeriod: {
    fontWeight: 'bold',
    fontSize: 9,
    color: '#004d40',
  },
  roadmapTask: {
    fontSize: 8,
    color: '#3a5a5a',
    paddingLeft: 12,
  },
  actionItem: {
    backgroundColor: '#f8faf9',
    padding: '4px 8px',
    borderRadius: 4,
    marginBottom: 2,
  },
  actionTitle: {
    fontWeight: 'bold',
    fontSize: 9,
    color: '#004d40',
  },
  actionDesc: {
    fontSize: 8,
    color: '#3a5a5a',
  },
  footer: {
    textAlign: 'center',
    paddingTop: 15,
    borderTop: 1,
    borderTopColor: '#e0e8e4',
    borderTopStyle: 'solid',
    marginTop: 20,
    fontSize: 8,
    color: '#8aaa9a',
  },
  disclaimer: {
    fontSize: 7,
    color: '#aac0b5',
    fontStyle: 'italic',
    marginTop: 4,
  },
});

interface ReportData {
  company: string;
  score: number;
  riskLevel: string;
  categoryScores: any[];
  risks: any[];
  gaps: any;
  roadmap: any[];
  frameworks: any[];
  actions: any[];
  actionPlan: any[];
  maturity: any;
}

export const PDFReport = ({ data }: { data: ReportData }) => {
  const { company, score, categoryScores, risks, gaps, roadmap, frameworks, actions, actionPlan, maturity } = data;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>AI GOVERNANCE ASSESSMENT REPORT</Text>
          <Text style={styles.headerSub}>Comprehensive AI Governance Maturity & Risk Assessment</Text>
        </View>

        {/* Organisation Details */}
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 10 }}>
          <Text style={{ width: '50%', fontSize: 10 }}><Text style={{ fontWeight: 'bold' }}>Company Name</Text>{'\n'}{company || 'Not Provided'}</Text>
          <Text style={{ width: '50%', fontSize: 10 }}><Text style={{ fontWeight: 'bold' }}>Assessment Type</Text>{'\n'}AI Governance Assessment</Text>
          <Text style={{ width: '50%', fontSize: 10, marginTop: 4 }}><Text style={{ fontWeight: 'bold' }}>Industry</Text>{'\n'}Information Technology</Text>
          <Text style={{ width: '50%', fontSize: 10, marginTop: 4 }}><Text style={{ fontWeight: 'bold' }}>Assessment Period</Text>{'\n'}01 {new Date().toLocaleString('default', { month: 'long' })} {new Date().getFullYear()} – 31 {new Date().toLocaleString('default', { month: 'long' })} {new Date().getFullYear()}</Text>
        </View>

        {/* Score Box */}
        <View style={styles.scoreBox}>
          <Text style={styles.score}>{score} / 100</Text>
          <Text style={styles.scoreLabel}>Overall AI Governance Score</Text>
          <Text style={styles.maturity}>{maturity.label}</Text>
          <Text style={{ fontSize: 9, color: '#3a5a5a', marginTop: 6 }}>{maturity.desc}</Text>
        </View>

        {/* Executive Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📊 Executive Summary</Text>
          <View style={{ flexDirection: 'row', gap: 6 }}>
            <View style={{ backgroundColor: '#f8faf9', padding: 8, borderRadius: 4, width: '32%', textAlign: 'center' }}>
              <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{categoryScores.length}</Text>
              <Text style={{ fontSize: 8 }}>Domains Assessed</Text>
            </View>
            <View style={{ backgroundColor: '#f8faf9', padding: 8, borderRadius: 4, width: '32%', textAlign: 'center' }}>
              <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{categoryScores.length * 5}</Text>
              <Text style={{ fontSize: 8 }}>Questions</Text>
            </View>
            <View style={{ backgroundColor: '#f8faf9', padding: 8, borderRadius: 4, width: '32%', textAlign: 'center' }}>
              <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{categoryScores.filter((c: any) => c.score >= 70).length}</Text>
              <Text style={{ fontSize: 8 }}>Requirements Met</Text>
            </View>
          </View>
        </View>

        {/* Scorecard */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>1. AI GOVERNANCE SCORECARD</Text>
          {categoryScores.map((cat: any, i: number) => (
            <View key={i} style={styles.categoryItem}>
              <Text>{i+1}. {cat.name}</Text>
              <Text style={{ fontWeight: 'bold', color: cat.score >= 70 ? '#2E8B57' : cat.score >= 50 ? '#f59e0b' : '#ef4444' }}>
                {cat.score}/100 · {cat.status.label}
              </Text>
            </View>
          ))}
        </View>

        {/* Risk Areas */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>2. TOP RISK AREAS</Text>
          {risks.map((risk: any, i: number) => (
            <View key={i} style={styles.riskItem}>
              <Text><Text style={{ fontWeight: 'bold' }}>{risk.title}</Text></Text>
              <Text style={{ fontSize: 8, color: risk.level === 'High' ? '#ef4444' : risk.level === 'Medium' ? '#f59e0b' : '#2E8B57' }}>
                Risk Level: {risk.level}
              </Text>
            </View>
          ))}
        </View>

        {/* Gap Analysis */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>3. GAP ANALYSIS</Text>
          {gaps.critical.length > 0 && gaps.critical[0] !== 'No critical gaps identified' && (
            <View style={[styles.gapBox, styles.gapCritical]}>
              <Text><Text style={{ fontWeight: 'bold' }}>Critical Gaps</Text></Text>
              {gaps.critical.map((g: string, i: number) => (
                <Text key={i} style={{ fontSize: 8 }}>• {g}</Text>
              ))}
            </View>
          )}
          {gaps.major.length > 0 && gaps.major[0] !== 'No major gaps identified' && (
            <View style={[styles.gapBox, styles.gapMajor]}>
              <Text><Text style={{ fontWeight: 'bold' }}>Major Gaps</Text></Text>
              {gaps.major.map((g: string, i: number) => (
                <Text key={i} style={{ fontSize: 8 }}>• {g}</Text>
              ))}
            </View>
          )}
          {gaps.minor.length > 0 && gaps.minor[0] !== 'No minor gaps identified' && (
            <View style={[styles.gapBox, styles.gapMinor]}>
              <Text><Text style={{ fontWeight: 'bold' }}>Minor Gaps</Text></Text>
              {gaps.minor.map((g: string, i: number) => (
                <Text key={i} style={{ fontSize: 8 }}>• {g}</Text>
              ))}
            </View>
          )}
        </View>

        {/* Roadmap */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>4. REMEDIATION ROADMAP</Text>
          {roadmap.map((item: any, i: number) => (
            <View key={i} style={styles.roadmapItem}>
              <Text style={styles.roadmapPeriod}>📅 {item.period}</Text>
              {item.tasks.map((task: string, j: number) => (
                <Text key={j} style={styles.roadmapTask}>• {task}</Text>
              ))}
            </View>
          ))}
        </View>

        {/* Framework Mapping */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>5. FRAMEWORK MAPPING</Text>
          {frameworks.map((fw: any, i: number) => (
            <View key={i} style={styles.categoryItem}>
              <Text>{fw.name}</Text>
              <Text style={{ fontWeight: 'bold', color: fw.score >= 70 ? '#2E8B57' : fw.score >= 50 ? '#f59e0b' : '#ef4444' }}>
                {fw.score}%
              </Text>
            </View>
          ))}
        </View>

        {/* Recommended Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>6. RECOMMENDED ACTIONS</Text>
          {actions.map((action: any, i: number) => (
            <View key={i} style={styles.actionItem}>
              <Text style={styles.actionTitle}>{i+1}. {action.title}</Text>
              <Text style={styles.actionDesc}>{action.desc}</Text>
            </View>
          ))}
        </View>

        {/* Conclusion */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>7. CONCLUSION</Text>
          <View style={{ backgroundColor: '#f0f7f4', borderLeft: 4, borderLeftColor: '#004d40', borderLeftStyle: 'solid', padding: 10, borderRadius: 4 }}>
            <Text style={{ fontSize: 11, fontWeight: 'bold', color: '#00332a' }}>Overall AI Governance Maturity: {maturity.label}</Text>
            <Text style={{ fontSize: 9, color: '#3a5a5a', marginTop: 4 }}>{maturity.desc}</Text>
          </View>
          <View style={{ marginTop: 6 }}>
            <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#00332a' }}>Your Next Steps:</Text>
            <Text style={{ fontSize: 9, color: '#3a5a5a' }}>• Prioritize remediation of critical gaps</Text>
            <Text style={{ fontSize: 9, color: '#3a5a5a' }}>• Strengthen monitoring and oversight</Text>
            <Text style={{ fontSize: 9, color: '#3a5a5a' }}>• Enhance documentation and evidence</Text>
            <Text style={{ fontSize: 9, color: '#3a5a5a' }}>• Build a culture of responsible AI</Text>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text>Generated by BusinezExcellence StartX LLP</Text>
          <Text>© {new Date().getFullYear()} Legal Galaxy. All rights reserved.</Text>
          <Text style={styles.disclaimer}>This report is for informational purposes and does not constitute legal advice.</Text>
        </View>
      </Page>
    </Document>
  );
};